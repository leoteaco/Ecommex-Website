'use client';

import { motion } from 'framer-motion';

// Geographically accurate Mexico outline generated from Natural Earth 1:110m data
// Projected with d3-geo geoMercator fitExtent to viewBox 0 0 900 520
const MEXICO_OUTLINE =
  'M100.711,35.075L126.898,32.968L156.162,30L154.005,35.35L188.801,48.601' +
  'L241.371,67.677L287.196,67.482L305.47,67.474L305.515,56.317L345.436,56.326' +
  'L353.839,65.916L365.622,74.436L379.314,86.243L386.956,100.195L392.689,114.801' +
  'L404.602,122.789L423.728,130.702L438.245,109.814L457.085,109.301L473.326,119.863' +
  'L484.888,137.906L492.858,153.261L506.453,168.113L511.523,186.248L517.975,198.361' +
  'L535.949,206.323L552.31,211.961L561.296,211.193L552.354,233.592L548.324,251.84' +
  'L546.64,285.532L544.42,297.729L548.414,311.304L555.56,323.395L560.16,342.542' +
  'L575.455,360.829L580.834,374.786L589.85,386.791L614.318,393.245L623.842,403.402' +
  'L644.053,396.619L661.625,394.165L678.879,389.795L693.383,385.62L708.04,375.671' +
  'L713.531,361.406L715.423,340.766L719.406,333.558L735.013,327.088L759.381,321.348' +
  'L779.784,322.211L793.761,320.113L799.289,325.362L798.507,337.258L786.124,351.887' +
  'L780.645,366.813L784.892,371.072L781.44,381.623L775.665,400.601L769.824,394.364' +
  'L764.999,394.769L760.619,395.089L752.364,409.73L748.182,406.864L745.392,407.98' +
  'L745.573,411.543L724.261,411.276L702.748,411.318L702.731,424.923L692.323,424.982' +
  'L700.901,433.027L709.423,438.587L711.981,443.798L715.713,445.255L715.123,453.429' +
  'L685.547,453.501L674.457,473.008L677.73,477.469L675.056,483.061L674.491,490' +
  'L648.413,464.307L636.529,456.531L617.715,450.276L604.843,452.019L586.336,461.036' +
  'L574.721,463.395L558.449,457.084L541.179,452.523L519.642,441.508L502.365,438.138' +
  'L476.278,426.939L457,415.396L451.183,408.934L438.288,407.489L414.718,399.813' +
  'L405.119,388.725L380.36,374.89L368.814,359.461L363.322,347.496L371.01,345.094' +
  'L368.639,338.071L373.937,331.671L374.05,323.12L366.277,311.988L364.197,302.093' +
  'L356.47,289.503L336.163,264.569L312.994,244.841L301.784,229.008L282.006,218.595' +
  'L277.769,212.348L281.282,196.484L269.534,190.475L255.932,177.917L250.187,159.788' +
  'L237.792,157.666L224.411,143.894L213.613,131.113L212.608,122.872L200.216,102.874' +
  'L192.054,82.414L192.403,72.091L175.737,61.386L168.044,62.564L154.893,55.106' +
  'L151.2,66.091L155.013,79.012L157.256,99.103L165.158,110.068L182.259,128.288' +
  'L186.057,134.488L189.561,136.365L192.602,145.379L196.697,145.015L201.322,161.863' +
  'L208.32,168.482L213.227,177.668L227.709,190.82L235.355,214.71L242.196,225.893' +
  'L248.598,237.813L249.864,251.176L260.976,252.011L270.216,263.476L278.575,274.703' +
  'L278.015,279.195L268.318,288.391L264.235,288.27L258.159,273.038L243.079,258.692' +
  'L226.463,246.474L214.677,240.037L215.439,221.416L211.943,207.554L200.96,199.596' +
  'L185.121,188.102L182.078,191.422L176.266,184.696L162.053,178.435L148.471,163.36' +
  'L150.151,161.395L159.642,162.872L168.192,153.13L169.052,141.32L151.312,122.539' +
  'L137.79,115.214L129.294,98.621L120.745,81.084L110.072,59.543Z';

// City positions projected from real geographic coordinates onto the 900x520 viewBox
const CITIES = [
  { id: 'TIJ', label: 'Tijuana', x: 103, y: 36, isHub: false },
  { id: 'MTY', label: 'Monterrey', x: 488, y: 216, isHub: false },
  { id: 'GDL', label: 'Guadalajara', x: 418, y: 342, isHub: true },
  { id: 'CDMX', label: 'CDMX', x: 515, y: 372, isHub: false },
  { id: 'CUN', label: 'Cancún', x: 798, y: 330, isHub: false },
];

// Route curves (quadratic Bezier) connecting cities
const ROUTES = [
  { id: 'gdl-cdmx', d: 'M 418,342 Q 480,340 515,372', duration: 8 },
  { id: 'gdl-mty', d: 'M 418,342 Q 470,265 488,216', duration: 10 },
  { id: 'gdl-tij', d: 'M 418,342 Q 220,150 103,36', duration: 14 },
  { id: 'gdl-cun', d: 'M 418,342 Q 620,300 798,330', duration: 12 },
  { id: 'mty-cdmx', d: 'M 488,216 Q 525,290 515,372', duration: 10 },
];

// Minimal truck icon as SVG path (16x10 rectangle with cab)
const TRUCK_ICON = 'M 0,2 L 10,2 10,8 0,8 Z M 10,3 L 14,3 16,5 16,8 10,8 Z';

// International import routes — from outside viewBox into GDL hub
const IMPORT_ROUTES = [
  {
    id: 'air-import',
    d: 'M 950,60 Q 700,120 418,342',
    label: 'AIR',
    icon: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z', // Lucide plane
    duration: 16,
  },
  {
    id: 'sea-import',
    d: 'M -40,490 Q 190,440 418,342',
    label: 'SEA',
    icon: 'M 1,8 L 0,11 18,11 17,8 15,8 15,4 13,4 13,8 5,8 5,3 3,3 3,8 Z', // cargo ship
    duration: 20,
  },
];

interface MexicoMapProps {
  className?: string;
  style?: 'default' | 'full';
}

export function MexicoMap({ className = '', style = 'default' }: MexicoMapProps) {
  const isFull = style === 'full';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      className={isFull ? 'w-full h-full flex items-center justify-center' : className}
    >
      <svg
        viewBox="0 0 900 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isFull ? 'w-full h-full' : 'w-full h-auto'}
        preserveAspectRatio={isFull ? 'xMidYMid meet' : undefined}
        aria-hidden="true"
      >
        {/* Mexico country outline — geographically accurate, no transform needed */}
        <motion.path
          d={MEXICO_OUTLINE}
          stroke="rgba(27,188,176,0.25)"
          strokeWidth={1.5}
          fill="rgba(27,188,176,0.12)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
        />

        {/* Route paths (dashed curves) */}
        {ROUTES.map((route, i) => (
          <motion.path
            key={route.id}
            d={route.d}
            stroke="rgba(27,188,176,0.35)"
            strokeWidth={2}
            strokeDasharray="8 5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3 + i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* City nodes */}
        {CITIES.map((city, i) => (
          <motion.g
            key={city.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.0 + i * 0.1,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: `${city.x}px ${city.y}px` }}
          >
            {/* Hub pulsing ring (GDL only) */}
            {city.isHub && (
              <circle
                cx={city.x}
                cy={city.y}
                r={16}
                fill="none"
                stroke="rgba(27,188,176,0.5)"
                strokeWidth={1.5}
                className="animate-pulse-ring"
                style={{ transformOrigin: `${city.x}px ${city.y}px` }}
              />
            )}

            {/* City dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={city.isHub ? 10 : 6}
              fill="#1BBCB0"
            />

            {/* Inner glow for hub */}
            {city.isHub && (
              <circle
                cx={city.x}
                cy={city.y}
                r={5}
                fill="rgba(255,255,255,0.4)"
              />
            )}

            {/* City label — hidden on tablet via CSS class, visible on lg+ */}
            <text
              x={city.x}
              y={city.y - (city.isHub ? 20 : 14)}
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize={13}
              fontWeight={600}
              fontFamily="var(--font-display), system-ui, sans-serif"
              className="map-city-label"
            >
              {city.id}
            </text>
          </motion.g>
        ))}

        {/* International import routes — air & sea into GDL */}
        {IMPORT_ROUTES.map((route, i) => (
          <g key={route.id}>
            {/* Dashed route line */}
            <motion.path
              d={route.d}
              stroke="rgba(27,188,176,0.2)"
              strokeWidth={1.5}
              strokeDasharray="12 6"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.2,
                delay: 2.2 + i * 0.3,
                ease: 'easeInOut',
              }}
            />
            {/* Moving icon along import route */}
            <g
              className="animate-import"
              style={
                {
                  offsetPath: `path('${route.d}')`,
                  '--truck-duration': `${route.duration}s`,
                } as React.CSSProperties
              }
            >
              <motion.path
                d={route.icon}
                fill="#1BBCB0"
                transform={`translate(-10, -10) scale(0.7)${route.id === 'air-import' ? ' rotate(180 12 12)' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 2.8 + i * 0.3 }}
              />
            </g>
          </g>
        ))}

        {/* Truck icons moving along routes */}
        {ROUTES.slice(0, 4).map((route, i) => (
          <g
            key={`truck-${route.id}`}
            className="animate-truck"
            style={
              {
                offsetPath: `path('${route.d}')`,
                '--truck-duration': `${route.duration}s`,
              } as React.CSSProperties
            }
          >
            <motion.path
              d={TRUCK_ICON}
              fill="#1BBCB0"
              transform="translate(-8, -5)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.5, delay: 2.0 + i * 0.2 }}
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

"""
Seeds first-draft i18n content for the 5 remaining service pages
(importacion, fulfillment, envios, devoluciones, tecnologia) in both
es.json and en.json. Content is intentionally first-draft and meant
for iteration page-by-page after the structure is in place.

Run: python scripts/seed-services-i18n.py
"""
import json

ES = {
    'importacion': {
        'meta': {
            'title': 'Importacion y Aduanas | Ecommex',
            'description': 'Importacion a Mexico sin sorpresas. Cumplimiento NOM, gestion aduanal y movimiento de carga internacional hasta tu rack en Guadalajara.'
        },
        'breadcrumb': {'services': 'Servicios', 'current': 'Importacion'},
        'hero': {
            'eyebrow': 'Importacion',
            'headline': 'Importacion a Mexico sin sorpresas',
            'subheadline': 'Llevamos tu mercancia de origen hasta el rack. Cumplimiento NOM, gestion aduanal y trazabilidad punto a punto. Tu equipo no toca un solo formato.',
            'cta': 'Cotizar Mi Importacion',
            'ctaSecondary': 'Como Funciona',
            'stats': [
                {'value': '15+', 'display': '15+', 'label': 'Paises de origen'},
                {'value': '6', 'display': '6 dias', 'label': 'Puerto a almacen'},
                {'value': '99%', 'display': '99%', 'label': 'Pre-clearance accuracy'},
                {'value': '100%', 'display': '100%', 'label': 'Cumplimiento NOM'},
                {'value': '24/7', 'display': '24/7', 'label': 'Trazabilidad en vivo'},
            ]
        },
        'whatsIncluded': {
            'headline': 'Lo que cubre nuestra importacion',
            'subhead': 'End-to-end. Sin terceros que te dejen colgado a medio camino.',
            'items': [
                {'title': 'Gestion aduanal completa', 'description': 'Tu agente aduanal dedicado, no un call center. Conoce tu producto y tu operacion.'},
                {'title': 'Cumplimiento NOM', 'description': 'Verificamos clasificacion arancelaria y normas oficiales mexicanas antes de embarcar.'},
                {'title': 'Logistica internacional', 'description': 'Maritimo, aereo o terrestre. Coordinamos con tu proveedor y con la naviera.'},
                {'title': 'Trazabilidad punto a punto', 'description': 'Sabes donde esta tu carga en cada momento. Notificaciones cuando hay cambios.'},
                {'title': 'Bond y seguros', 'description': 'Cobertura desde origen hasta puerta de almacen. Cero gaps de responsabilidad.'},
                {'title': 'Documentacion digital', 'description': 'Pedimentos, facturas, certificados. Todo en tu portal, sin papeleo perdido.'},
            ]
        },
        'process': {
            'headline': 'Como movemos tu carga',
            'subhead': '5 pasos transparentes desde origen hasta tu rack.',
            'steps': [
                {'title': 'Cotizacion y planificacion', 'description': 'Revisamos tu proveedor, producto y NOM aplicable.'},
                {'title': 'Pre-clearance', 'description': 'Documentacion y clasificacion arancelaria antes de embarcar.'},
                {'title': 'Transito internacional', 'description': 'Maritimo, aereo o terrestre. Tracking en vivo.'},
                {'title': 'Despacho aduanal', 'description': 'Liberacion en puerto/aeropuerto sin demoras.'},
                {'title': 'Recepcion en almacen', 'description': 'Llegada a Ecommex GDL, verificacion y registro en tu inventario.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Por que importar con Ecommex',
            'subhead': 'No es solo flete. Es certeza.',
            'items': [
                {'tag': 'CUMPLIMIENTO', 'title': 'NOM no es opcional', 'description': 'Especialistas en normas oficiales mexicanas. Detectamos problemas de clasificacion antes de que paren tu carga en aduana.', 'placeholder': 'Foto: oficina aduanal / pedimentos'},
                {'tag': 'VELOCIDAD', 'title': '6 dias promedio puerto a rack', 'description': 'Pre-clearance + relacion con agentes aduanales reduce tiempos vs. la media de mercado de 10-15 dias.', 'placeholder': 'Foto: contenedor en puerto'},
                {'tag': 'VISIBILIDAD', 'title': 'Sabes donde esta tu carga', 'description': 'Tracking en vivo desde origen. Te notificamos cualquier cambio antes de que sea problema.', 'placeholder': 'Foto: dashboard tracking'},
            ]
        },
        'pullquote': {
            'text': 'Antes perdiamos 2 semanas en aduana por errores de clasificacion. Con Ecommex no hemos tenido un solo retraso en 8 meses.',
            'name': 'Maria Gonzalez',
            'role': 'VP Operaciones',
            'company': 'TechBrand MX'
        },
        'faq': {
            'headline': 'Preguntas frecuentes',
            'subhead': 'Lo que preguntan los importadores antes de arrancar',
            'items': [
                {'question': 'Manejan importacion desde cualquier pais?', 'answer': 'Si, importamos desde Asia, Europa, Estados Unidos y Latinoamerica. Si tu proveedor esta en otra region, lo evaluamos caso por caso.'},
                {'question': 'Que pasa si mi producto necesita una NOM especifica?', 'answer': 'Tenemos especialistas en normas oficiales mexicanas. Validamos clasificacion y certificaciones antes de embarcar para evitar retenciones.'},
                {'question': 'Tienen agente aduanal propio?', 'answer': 'Trabajamos con agentes aduanales certificados con los que llevamos anos. Tu carga la maneja siempre el mismo equipo, no un call center.'},
                {'question': 'Como manejan los aranceles e IVA?', 'answer': 'Te damos un calculo proyectado antes de embarcar y los pagamos por ti contra reembolso. Cero sorpresas en la factura final.'},
                {'question': 'Que pasa si mi producto se dana en transito?', 'answer': 'Cobertura de seguro desde origen hasta nuestro almacen. Manejamos el reclamo por ti.'},
                {'question': 'Pueden coordinar con mi proveedor en otro idioma?', 'answer': 'Si. Comunicacion en ingles, espanol y mandarin segun el caso.'},
            ]
        },
        'related': {
            'headline': 'Servicios complementarios',
            'subhead': 'Lo que viene despues de la importacion.',
            'items': [
                {'title': 'Almacenamiento', 'description': '12,000+ posiciones en GDL para recibir tu carga importada.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment y Pick-Pack', 'description': 'Que tus pedidos salgan rapidos y precisos a tus clientes.', 'href': 'fulfillment'},
                {'title': 'Envios a Todo Mexico', 'description': 'Ultima milla desde GDL a los 32 estados.', 'href': 'envios'},
                {'title': 'Tecnologia e Integraciones', 'description': 'Visibilidad de tu carga desde origen hasta venta final.', 'href': 'tecnologia'},
            ]
        }
    },

    'fulfillment': {
        'meta': {
            'title': 'Fulfillment y Pick-Pack | Ecommex',
            'description': 'Fulfillment para marcas que venden en Mexico. 99.9% de precision, integracion con marketplaces y SLAs que cumplen.'
        },
        'breadcrumb': {'services': 'Servicios', 'current': 'Fulfillment'},
        'hero': {
            'eyebrow': 'Fulfillment',
            'headline': 'Tus pedidos salen el mismo dia, sin errores',
            'subheadline': 'Pick-pack obsesivo, integracion con tus marketplaces y SLAs que cumplen. Tu equipo deja de pelearse con devoluciones por errores de operacion.',
            'cta': 'Cotizar Mi Fulfillment',
            'ctaSecondary': 'Como Funciona',
            'stats': [
                {'value': '50000+', 'display': '50K+', 'label': 'Ordenes mensuales'},
                {'value': '99.9%', 'display': '99.9%', 'label': 'Precision de pick'},
                {'value': '<24h', 'display': '<24h', 'label': 'SLA de salida'},
                {'value': '15+', 'display': '15+', 'label': 'Marketplaces integrados'},
                {'value': '<2%', 'display': '<2%', 'label': 'Returns por error'},
            ]
        },
        'whatsIncluded': {
            'headline': 'Lo que incluye nuestro fulfillment',
            'subhead': 'Mas que cajas. Es la operacion que tus clientes notan.',
            'items': [
                {'title': 'Pick-pack obsesivo', 'description': 'Doble verificacion por scanner. 99.9% de precision, no marketing - numero real.'},
                {'title': 'Integracion multi-canal', 'description': 'Shopify, Mercado Libre, Amazon, tu propio ecommerce. Una sola operacion.'},
                {'title': 'Empaque personalizado', 'description': 'Tu marca, tu unboxing. Materiales que reflejan la calidad de tu producto.'},
                {'title': 'Etiquetado y manifiestos', 'description': 'Etiquetas de envio automaticas segun marketplace. Cero errores manuales.'},
                {'title': 'Kitting y bundling', 'description': 'Combinaciones promocionales armadas a medida sin extra fees ocultos.'},
                {'title': 'Inventario sincronizado', 'description': 'Stock actualizado en todos tus canales en tiempo real. Sin oversell.'},
            ]
        },
        'process': {
            'headline': 'Como procesamos tus pedidos',
            'subhead': '5 pasos desde que cae la orden hasta que sale del almacen.',
            'steps': [
                {'title': 'Recepcion de orden', 'description': 'Integracion API con tu canal. La orden cae en nuestro sistema en segundos.'},
                {'title': 'Pick por scanner', 'description': 'Operador toma cada SKU verificando con scanner. Cero errores manuales.'},
                {'title': 'Pack con tu marca', 'description': 'Empaque segun las specs de tu brand. Inserts, proteccion, presentacion.'},
                {'title': 'Etiquetado', 'description': 'Etiqueta de envio segun marketplace o carrier. Auto-generada.'},
                {'title': 'Entrega a carrier', 'description': 'Salida diaria. Tu pedido ya viaja antes del SLA prometido.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Por que Ecommex',
            'subhead': 'La operacion que protege tu marca.',
            'items': [
                {'tag': 'PRECISION', 'title': '99.9% de pick accuracy', 'description': 'Doble scan en cada pick. Las devoluciones por error de operacion son el dolor #1 de las marcas - nosotros lo eliminamos.', 'placeholder': 'Foto: operador con scanner / pick station'},
                {'tag': 'VELOCIDAD', 'title': 'Mismo dia, sin excepciones', 'description': 'Orden recibida antes del cutoff diario sale el mismo dia. No hay temporada que nos rompa el SLA.', 'placeholder': 'Foto: pedidos saliendo / dock'},
                {'tag': 'MULTI-CANAL', 'title': 'Una sola operacion, todos tus canales', 'description': 'Marketplaces, ecommerce propio, B2B. Misma bodega, mismo equipo, misma calidad.', 'placeholder': 'Foto: dashboard multi-canal'},
            ]
        },
        'pullquote': {
            'text': 'Bajamos las devoluciones por errores de pick de 8% a 0.4% en el primer mes. El equipo de customer service ya no pasa el dia apagando incendios.',
            'name': 'Carlos Ramirez',
            'role': 'Head of Operations',
            'company': 'Vivante Mexico'
        },
        'faq': {
            'headline': 'Preguntas frecuentes',
            'subhead': 'Lo que preguntan los founders antes de arrancar fulfillment',
            'items': [
                {'question': 'Cuantos pedidos al mes manejan?', 'answer': 'Procesamos 50,000+ ordenes mensuales para nuestra base actual. Soportamos picos de temporada (Buen Fin, Hot Sale) sin degradar el SLA.'},
                {'question': 'Se integran con mi marketplace o ecommerce?', 'answer': 'Si. Integraciones nativas con Shopify, Mercado Libre, Amazon, WooCommerce y mas. Si usas un sistema custom, hacemos la integracion por API.'},
                {'question': 'Cual es el SLA real de salida?', 'answer': 'Ordenes recibidas antes de las 14:00 salen el mismo dia. Despues del cutoff, salen al dia siguiente. Sin excepciones de temporada.'},
                {'question': 'Manejan empaque personalizado?', 'answer': 'Si. Trabajamos con tus materiales (cajas, inserts, fillers) o te ayudamos a disenarlos. Tu brand, tu unboxing.'},
                {'question': 'Que pasa si hay error en un pedido?', 'answer': 'Cubrimos el reembolso del producto y costos de reenvio. Pero con 99.9% de accuracy, los errores son menos del 0.1% del volumen.'},
                {'question': 'Pueden hacer kitting o bundles?', 'answer': 'Si. Bundles promocionales, kits de regalo, combinaciones por temporada. Sin fees ocultos por SKU compuesto.'},
            ]
        },
        'related': {
            'headline': 'Servicios complementarios',
            'subhead': 'Lo que viene antes y despues del fulfillment.',
            'items': [
                {'title': 'Almacenamiento', 'description': '12,000+ posiciones en GDL para tu inventario.', 'href': 'almacenamiento'},
                {'title': 'Importacion y Aduanas', 'description': 'Llevamos tu mercancia de origen hasta el rack.', 'href': 'importacion'},
                {'title': 'Envios a Todo Mexico', 'description': 'Ultima milla a los 32 estados desde GDL.', 'href': 'envios'},
                {'title': 'Gestion de Devoluciones', 'description': 'Reverse logistics que reintegra al inventario en 48h.', 'href': 'devoluciones'},
            ]
        }
    },

    'envios': {
        'meta': {
            'title': 'Envios a Todo Mexico | Ecommex',
            'description': 'Ultima milla desde Guadalajara a los 32 estados. Multiples carriers, una sola plataforma, SLAs que cumplen.'
        },
        'breadcrumb': {'services': 'Servicios', 'current': 'Envios'},
        'hero': {
            'eyebrow': 'Envios',
            'headline': 'Llegamos a los 32 estados, sin excusas',
            'subheadline': 'Ultima milla desde Guadalajara con multiples carriers en una sola plataforma. Tu cliente recibe, no espera.',
            'cta': 'Cotizar Mis Envios',
            'ctaSecondary': 'Como Funciona',
            'stats': [
                {'value': '32', 'display': '32', 'label': 'Estados cubiertos'},
                {'value': '5+', 'display': '5+', 'label': 'Carriers integrados'},
                {'value': '<48h', 'display': '<48h', 'label': 'Entrega nacional'},
                {'value': '24h', 'display': '24h', 'label': 'GDL metropolitana'},
                {'value': '98%', 'display': '98%', 'label': 'On-time delivery'},
            ]
        },
        'whatsIncluded': {
            'headline': 'Lo que cubren nuestros envios',
            'subhead': 'Mas que mover cajas. Es la ultima experiencia de tu cliente.',
            'items': [
                {'title': 'Cobertura nacional', 'description': 'Los 32 estados de Mexico. Zonas rurales incluidas, no solo metropolis.'},
                {'title': 'Multiples carriers', 'description': 'Estafeta, DHL, FedEx, paqueterias regionales. Elegimos el mejor por ruta.'},
                {'title': 'Tarifas optimizadas', 'description': 'Volumen agregado de todos los clientes Ecommex. Mejores tarifas que ir directo.'},
                {'title': 'Tracking unificado', 'description': 'Un solo numero de tracking para tu cliente sin importar el carrier.'},
                {'title': 'COD disponible', 'description': 'Cobro contra entrega para los mercados que aun lo prefieren.'},
                {'title': 'Notificaciones automaticas', 'description': 'Tu cliente recibe SMS y email en cada hito del envio.'},
            ]
        },
        'process': {
            'headline': 'Como manejamos tu ultima milla',
            'subhead': 'De la bodega a la puerta de tu cliente en 5 pasos.',
            'steps': [
                {'title': 'Seleccion de carrier', 'description': 'Algoritmo elige el mejor carrier por destino, peso y SLA.'},
                {'title': 'Generacion de guia', 'description': 'Etiqueta automatica con tu marca y datos del destinatario.'},
                {'title': 'Recoleccion diaria', 'description': 'Carriers recogen en nuestro dock. Multiples salidas al dia.'},
                {'title': 'Transito monitoreado', 'description': 'Tracking en vivo. Deteccion proactiva de retrasos.'},
                {'title': 'Entrega y notificacion', 'description': 'Cliente recibe. Notificacion automatica a ti y a tu sistema.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Por que enviar con Ecommex',
            'subhead': 'No es solo paqueteria. Es la ultima experiencia de tu marca.',
            'items': [
                {'tag': 'COBERTURA', 'title': 'Los 32 estados, sin huecos', 'description': 'Combinamos carriers nacionales y regionales para cubrir incluso zonas que otros no llegan. Tu marca no tiene "excepciones de zona".', 'placeholder': 'Foto: mapa de cobertura / camion en ruta'},
                {'tag': 'OPTIMIZACION', 'title': 'Mejor tarifa por ruta', 'description': 'Volumen agregado nos da tarifas que ningun cliente individual consigue. Pasamos los ahorros directo a ti.', 'placeholder': 'Foto: dashboard de envios / tarifas'},
                {'tag': 'EXPERIENCIA', 'title': 'Tu cliente sabe donde esta su pedido', 'description': 'Notificaciones SMS y email automaticas. Tu cliente no llama a customer service, ya sabe.', 'placeholder': 'Foto: notificacion SMS / cliente'},
            ]
        },
        'pullquote': {
            'text': 'Antes teniamos 4 contratos con 4 paqueterias. Ahora tengo un solo contacto y mejores tarifas que negociar yo mismo.',
            'name': 'Andrea Mendez',
            'role': 'Founder',
            'company': 'Bonita Naturals'
        },
        'faq': {
            'headline': 'Preguntas frecuentes',
            'subhead': 'Lo que preguntan las marcas sobre envios',
            'items': [
                {'question': 'Que carriers manejan?', 'answer': 'Estafeta, DHL, FedEx, Paquete Express y carriers regionales. Elegimos el mejor por destino, no por contrato exclusivo.'},
                {'question': 'Cual es el tiempo de entrega promedio?', 'answer': 'GDL metropolitana: 24h. Ciudades principales: 24-48h. Zonas remotas: 3-5 dias. Te damos SLA especifico por destino al cotizar.'},
                {'question': 'Tienen cobertura en zonas rurales?', 'answer': 'Si. Combinamos carriers nacionales con paqueterias regionales para llegar a localidades que las grandes no cubren.'},
                {'question': 'Manejan COD (cobro contra entrega)?', 'answer': 'Si, para los mercados que aun lo requieren. Te liquidamos los cobros semanalmente.'},
                {'question': 'Como funciona el tracking?', 'answer': 'Un solo numero de tracking para tu cliente sin importar el carrier final. Notificaciones automaticas en cada hito.'},
                {'question': 'Que pasa si un envio se pierde o dana?', 'answer': 'Cobertura de seguro incluida. Manejamos el reclamo con el carrier por ti y te reponemos el costo.'},
            ]
        },
        'related': {
            'headline': 'Servicios complementarios',
            'subhead': 'Lo que viene antes del envio.',
            'items': [
                {'title': 'Almacenamiento', 'description': '12,000+ posiciones en GDL desde donde sale tu inventario.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment y Pick-Pack', 'description': 'Pedidos preparados con 99.9% de precision.', 'href': 'fulfillment'},
                {'title': 'Importacion y Aduanas', 'description': 'Llevamos tu mercancia desde el origen.', 'href': 'importacion'},
                {'title': 'Tecnologia e Integraciones', 'description': 'Tracking unificado en una sola plataforma.', 'href': 'tecnologia'},
            ]
        }
    },

    'devoluciones': {
        'meta': {
            'title': 'Gestion de Devoluciones | Ecommex',
            'description': 'Reverse logistics que reintegra al inventario en 48h. Inspeccion, refurbishment y trazabilidad de cada devolucion.'
        },
        'breadcrumb': {'services': 'Servicios', 'current': 'Devoluciones'},
        'hero': {
            'eyebrow': 'Devoluciones',
            'headline': 'Reverse logistics que recupera tu margen',
            'subheadline': 'Recibimos, inspeccionamos y reintegramos tu mercancia devuelta en 48h. Las devoluciones dejan de ser perdida para volverse inventario disponible.',
            'cta': 'Cotizar Mis Devoluciones',
            'ctaSecondary': 'Como Funciona',
            'stats': [
                {'value': '48h', 'display': '48h', 'label': 'Reverse cycle promedio'},
                {'value': '85%', 'display': '85%', 'label': 'Reintegrable a inventario'},
                {'value': '100%', 'display': '100%', 'label': 'Inspeccion por SKU'},
                {'value': '24/7', 'display': '24/7', 'label': 'Visibilidad de retornos'},
                {'value': '<5%', 'display': '<5%', 'label': 'Refurbishment rate'},
            ]
        },
        'whatsIncluded': {
            'headline': 'Lo que cubre nuestra gestion de devoluciones',
            'subhead': 'Tu margen no se pierde solo porque el cliente cambio de opinion.',
            'items': [
                {'title': 'Recepcion centralizada', 'description': 'Tus clientes devuelven a una sola direccion. Nosotros las recibimos por ti.'},
                {'title': 'Inspeccion por SKU', 'description': 'Cada devolucion se revisa contra criterios que tu defines. Nada pasa sin verificar.'},
                {'title': 'Reintegracion rapida', 'description': '48h promedio de devolucion a inventario disponible para volver a vender.'},
                {'title': 'Refurbishment cuando aplica', 'description': 'Producto con dano menor se restaura para venta como B-stock con tu autorizacion.'},
                {'title': 'Disposicion de scrap', 'description': 'Mercancia no recuperable se desecha de forma documentada. Cero responsabilidad fiscal.'},
                {'title': 'Reporting detallado', 'description': 'Dashboard con razones de devolucion, tasas por SKU y patrones para mejorar tu producto.'},
            ]
        },
        'process': {
            'headline': 'Como procesamos tus devoluciones',
            'subhead': '5 pasos desde la llegada hasta el inventario.',
            'steps': [
                {'title': 'Recepcion de devolucion', 'description': 'Llegada al dock de devoluciones, registro inmediato en el sistema.'},
                {'title': 'Identificacion', 'description': 'Match contra orden original. Tracking del cliente, motivo y fecha.'},
                {'title': 'Inspeccion', 'description': 'Revision visual y funcional segun tus criterios. Foto-evidencia.'},
                {'title': 'Disposicion', 'description': 'Reintegrar, refurbish o desechar. Decidido por reglas que tu defines.'},
                {'title': 'Cierre', 'description': 'Inventario actualizado, cliente notificado, reembolso autorizado si aplica.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Por que gestionar devoluciones con Ecommex',
            'subhead': 'Las devoluciones no son el fin de la venta. Son el principio del retention.',
            'items': [
                {'tag': 'VELOCIDAD', 'title': '48h al inventario', 'description': 'La mayoria de 3PLs tardan 1-2 semanas en procesar devoluciones. Nosotros 48h. Tu cash flow no espera.', 'placeholder': 'Foto: estacion de inspeccion'},
                {'tag': 'RECUPERACION', 'title': '85% vuelve a venderse', 'description': 'Inspeccion rigurosa + refurbishment cuando aplica. Solo el 5% va a scrap. El resto es margen recuperado.', 'placeholder': 'Foto: producto restaurado'},
                {'tag': 'INTELIGENCIA', 'title': 'Datos para mejorar tu producto', 'description': 'Reportes con razones de devolucion por SKU. Identificas problemas de calidad antes de que se vuelvan virales.', 'placeholder': 'Foto: dashboard de analytics'},
            ]
        },
        'pullquote': {
            'text': 'Pasamos de tener una bodega llena de devoluciones sin procesar a tenerlas todas reintegradas en 48h. Recuperamos 18% mas margen que antes.',
            'name': 'Roberto Salinas',
            'role': 'COO',
            'company': 'Pure Beauty Co'
        },
        'faq': {
            'headline': 'Preguntas frecuentes',
            'subhead': 'Lo que preguntan las marcas sobre reverse logistics',
            'items': [
                {'question': 'Cuanto tarda procesar una devolucion?', 'answer': '48h promedio desde la llegada hasta que esta reintegrada al inventario o decidida su disposicion. Picos de temporada se mantienen por debajo de 72h.'},
                {'question': 'Quien decide si un producto se reintegra o no?', 'answer': 'Tu defines los criterios (estado fisico, funcionalidad, packaging) y nosotros aplicamos la regla. Casos border-line se te consultan.'},
                {'question': 'Manejan refurbishment?', 'answer': 'Si. Productos con dano menor pueden restaurarse para venderse como B-stock o outlet, con tu autorizacion por SKU.'},
                {'question': 'Como manejan los reembolsos al cliente?', 'answer': 'Te notificamos la decision de inspeccion. Tu equipo (o automatizacion) procesa el reembolso desde tu sistema. No tocamos tu pasarela de pagos.'},
                {'question': 'Que pasa con la mercancia no recuperable?', 'answer': 'Disposicion documentada (donacion, reciclaje o desecho). Te entregamos el certificado para tu contabilidad.'},
                {'question': 'Tengo visibilidad de las devoluciones en curso?', 'answer': 'Si. Dashboard en tiempo real con cada devolucion: estado, motivo, decision, fecha. Reportes semanales por email.'},
            ]
        },
        'related': {
            'headline': 'Servicios complementarios',
            'subhead': 'Lo que conecta con la gestion de devoluciones.',
            'items': [
                {'title': 'Almacenamiento', 'description': 'El inventario reintegrado vuelve a tu pool en GDL.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment y Pick-Pack', 'description': 'Pedidos correctos = menos devoluciones por error.', 'href': 'fulfillment'},
                {'title': 'Envios a Todo Mexico', 'description': 'Ultima milla de calidad reduce danos en transito.', 'href': 'envios'},
                {'title': 'Tecnologia e Integraciones', 'description': 'Visibilidad completa de tu operacion reverse.', 'href': 'tecnologia'},
            ]
        }
    },

    'tecnologia': {
        'meta': {
            'title': 'Tecnologia e Integraciones | Ecommex',
            'description': 'Una plataforma que conecta tu inventario, tus marketplaces, tu ecommerce y nuestra operacion. Una sola fuente de verdad.'
        },
        'breadcrumb': {'services': 'Servicios', 'current': 'Tecnologia'},
        'hero': {
            'eyebrow': 'Tecnologia',
            'headline': 'Tu operacion, una sola pantalla',
            'subheadline': 'WMS + portal + integraciones nativas con tus canales. Inventario sincronizado, ordenes automatizadas, datos en tiempo real. Sin Excel, sin sorpresas.',
            'cta': 'Conocer la Plataforma',
            'ctaSecondary': 'Como Funciona',
            'stats': [
                {'value': '30+', 'display': '30+', 'label': 'Integraciones nativas'},
                {'value': '<5min', 'display': '<5min', 'label': 'Sync de inventario'},
                {'value': '100%', 'display': '100%', 'label': 'API-first'},
                {'value': '24/7', 'display': '24/7', 'label': 'Visibilidad'},
                {'value': '99.9%', 'display': '99.9%', 'label': 'Uptime portal'},
            ]
        },
        'whatsIncluded': {
            'headline': 'Lo que incluye nuestra plataforma',
            'subhead': 'No es un add-on. Es la base de toda la operacion.',
            'items': [
                {'title': 'WMS de clase mundial', 'description': 'Warehouse Management System que tracka cada movimiento por SKU, ubicacion y operador.'},
                {'title': 'Portal de cliente', 'description': 'Tu propia vista del inventario, ordenes y metricas. Acceso seguro 24/7 desde cualquier dispositivo.'},
                {'title': 'Integraciones nativas', 'description': 'Shopify, Mercado Libre, Amazon, WooCommerce y mas. Sin desarrollos custom.'},
                {'title': 'API REST completa', 'description': 'Para los que necesitan integracion custom. Documentacion clara, sandbox disponible.'},
                {'title': 'Reportes automaticos', 'description': 'Inventario, pedidos, devoluciones, performance. Por email o via dashboard.'},
                {'title': 'Alertas configurables', 'description': 'Stock bajo, retrasos, anomalias. Te enteras antes de que sea problema.'},
            ]
        },
        'process': {
            'headline': 'Como conectamos tu operacion',
            'subhead': '5 pasos desde firmar hasta operar en produccion.',
            'steps': [
                {'title': 'Discovery tecnico', 'description': 'Mapeamos tus canales actuales, sistemas y volumenes.'},
                {'title': 'Setup de integraciones', 'description': 'Conectamos cada canal con nuestro WMS. Test en sandbox.'},
                {'title': 'Carga de catalogo', 'description': 'SKUs, variantes, dimensiones. Sincronizacion inicial de inventario.'},
                {'title': 'Pruebas end-to-end', 'description': 'Pedidos de prueba en cada canal. Validacion de flujo completo.'},
                {'title': 'Go live', 'description': 'Operacion en produccion. Monitoreo activo las primeras 2 semanas.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Por que nuestra tecnologia',
            'subhead': 'Construida para 3PL real, no para presentaciones.',
            'items': [
                {'tag': 'CONECTIVIDAD', 'title': 'Integraciones que si funcionan', 'description': 'Conexiones nativas con los marketplaces y ecommerces que importan en Mexico. Sin middleware ni Zapier.', 'placeholder': 'Foto: dashboard integraciones'},
                {'tag': 'CONTROL', 'title': 'Tu vista, no la nuestra', 'description': 'Portal con permisos por usuario. Tu equipo de ops ve ordenes, finanzas ve costos, ejecutivos ven KPIs.', 'placeholder': 'Foto: portal de cliente'},
                {'tag': 'CONFIABILIDAD', 'title': '99.9% uptime, no marketing', 'description': 'Stack en cloud con redundancia. El ano pasado tuvimos 23 minutos de downtime total. Real.', 'placeholder': 'Foto: dashboard metricas'},
            ]
        },
        'pullquote': {
            'text': 'Antes viviamos en Excel y mensajes de WhatsApp. Ahora todo esta en una pantalla y mi equipo de operaciones recupero 15 horas a la semana.',
            'name': 'Daniela Ortiz',
            'role': 'CEO',
            'company': 'Estela Brand'
        },
        'faq': {
            'headline': 'Preguntas frecuentes',
            'subhead': 'Lo que preguntan los equipos tecnicos antes de migrar',
            'items': [
                {'question': 'Con que plataformas se integran?', 'answer': 'Shopify, Mercado Libre, Amazon, WooCommerce, VTEX, Magento, y mas. Si usas algo custom, integramos via API.'},
                {'question': 'Cuanto tarda la implementacion?', 'answer': 'Para integraciones estandar (Shopify, MELI), 1-2 semanas. Implementaciones custom o multi-canal tardan 3-4 semanas.'},
                {'question': 'Tienen API publica?', 'answer': 'Si. API REST completa con documentacion, sandbox y soporte tecnico para tu equipo de desarrollo.'},
                {'question': 'Que pasa con mi data si dejo el servicio?', 'answer': 'Tu data es tuya. Te entregamos export completo en CSV/JSON dentro de 5 dias habiles tras solicitarlo.'},
                {'question': 'Tienen SLA de uptime?', 'answer': '99.9% uptime contractual. Stack en cloud con redundancia. 2024 tuvimos 23 minutos de downtime total.'},
                {'question': 'Como manejan la seguridad de la data?', 'answer': 'Encriptacion en transito y reposo, 2FA obligatorio, auditoria de accesos. Cumplimiento con LFPDPPP (ley mexicana de datos).'},
            ]
        },
        'related': {
            'headline': 'Servicios complementarios',
            'subhead': 'La tecnologia potencia toda nuestra operacion.',
            'items': [
                {'title': 'Almacenamiento', 'description': 'Inventario sincronizado en tiempo real con tu sistema.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment y Pick-Pack', 'description': 'Ordenes automatizadas desde tus canales.', 'href': 'fulfillment'},
                {'title': 'Envios a Todo Mexico', 'description': 'Tracking unificado en una sola plataforma.', 'href': 'envios'},
                {'title': 'Gestion de Devoluciones', 'description': 'Visibilidad completa del flujo reverse.', 'href': 'devoluciones'},
            ]
        }
    }
}

EN = {
    'importacion': {
        'meta': {
            'title': 'Import & Customs | Ecommex',
            'description': 'Import to Mexico without surprises. NOM compliance, customs management and international cargo movement to your rack in Guadalajara.'
        },
        'breadcrumb': {'services': 'Services', 'current': 'Import'},
        'hero': {
            'eyebrow': 'Import',
            'headline': 'Import to Mexico without surprises',
            'subheadline': 'We move your merchandise from origin to the rack. NOM compliance, customs management and end-to-end traceability. Your team never touches a single form.',
            'cta': 'Quote My Import',
            'ctaSecondary': 'How It Works',
            'stats': [
                {'value': '15+', 'display': '15+', 'label': 'Origin countries'},
                {'value': '6', 'display': '6 days', 'label': 'Port to warehouse'},
                {'value': '99%', 'display': '99%', 'label': 'Pre-clearance accuracy'},
                {'value': '100%', 'display': '100%', 'label': 'NOM compliance'},
                {'value': '24/7', 'display': '24/7', 'label': 'Live traceability'},
            ]
        },
        'whatsIncluded': {
            'headline': 'What our import service covers',
            'subhead': 'End-to-end. No third parties leaving you stranded mid-route.',
            'items': [
                {'title': 'Full customs management', 'description': 'A dedicated customs broker, not a call center. Knows your product and operation.'},
                {'title': 'NOM compliance', 'description': 'We verify tariff classification and Mexican standards before you ship.'},
                {'title': 'International logistics', 'description': 'Sea, air or land. We coordinate with your supplier and carrier.'},
                {'title': 'End-to-end traceability', 'description': 'You know where your cargo is at every moment. Notifications when things change.'},
                {'title': 'Bond and insurance', 'description': 'Coverage from origin to warehouse door. Zero responsibility gaps.'},
                {'title': 'Digital documentation', 'description': 'Pedimentos, invoices, certificates. All in your portal, no lost paperwork.'},
            ]
        },
        'process': {
            'headline': 'How we move your cargo',
            'subhead': '5 transparent steps from origin to your rack.',
            'steps': [
                {'title': 'Quote and planning', 'description': 'We review your supplier, product and applicable NOM.'},
                {'title': 'Pre-clearance', 'description': 'Documentation and tariff classification before shipping.'},
                {'title': 'International transit', 'description': 'Sea, air or land. Live tracking.'},
                {'title': 'Customs clearance', 'description': 'Release at port or airport without delays.'},
                {'title': 'Warehouse receiving', 'description': 'Arrival at Ecommex GDL, verification and inventory registration.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Why import with Ecommex',
            'subhead': 'It is not just freight. It is certainty.',
            'items': [
                {'tag': 'COMPLIANCE', 'title': 'NOM is not optional', 'description': 'Specialists in Mexican Official Standards. We catch classification problems before they stop your cargo at customs.', 'placeholder': 'Photo: customs office / pedimentos'},
                {'tag': 'SPEED', 'title': '6 day average port to rack', 'description': 'Pre-clearance + relationships with customs agents reduces times vs. the 10-15 day market average.', 'placeholder': 'Photo: container at port'},
                {'tag': 'VISIBILITY', 'title': 'You know where your cargo is', 'description': 'Live tracking from origin. We notify you of any change before it becomes a problem.', 'placeholder': 'Photo: tracking dashboard'},
            ]
        },
        'pullquote': {
            'text': 'We used to lose 2 weeks at customs due to classification errors. With Ecommex we have not had a single delay in 8 months.',
            'name': 'Maria Gonzalez',
            'role': 'VP of Operations',
            'company': 'TechBrand MX'
        },
        'faq': {
            'headline': 'Frequently asked questions',
            'subhead': 'What importers ask before getting started',
            'items': [
                {'question': 'Do you handle imports from any country?', 'answer': 'Yes, we import from Asia, Europe, the US and Latin America. If your supplier is elsewhere, we evaluate case by case.'},
                {'question': 'What if my product needs a specific NOM?', 'answer': 'We have specialists in Mexican Official Standards. We validate classification and certifications before shipping to avoid holds.'},
                {'question': 'Do you have your own customs broker?', 'answer': 'We work with certified customs brokers we have partnered with for years. Your cargo is always handled by the same team, not a call center.'},
                {'question': 'How do you handle tariffs and VAT?', 'answer': 'We give you a projected calculation before shipping and pay them on your behalf for reimbursement. Zero surprises in the final invoice.'},
                {'question': 'What if my product is damaged in transit?', 'answer': 'Insurance coverage from origin to our warehouse. We handle the claim for you.'},
                {'question': 'Can you coordinate with my supplier in another language?', 'answer': 'Yes. Communication in English, Spanish and Mandarin as needed.'},
            ]
        },
        'related': {
            'headline': 'Related services',
            'subhead': 'What comes after import.',
            'items': [
                {'title': 'Warehousing', 'description': '12,000+ positions in GDL to receive your imported cargo.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment & Pick-Pack', 'description': 'Get your orders out fast and accurate to your customers.', 'href': 'fulfillment'},
                {'title': 'Shipping Across Mexico', 'description': 'Last mile from GDL to the 32 states.', 'href': 'envios'},
                {'title': 'Technology & Integrations', 'description': 'Visibility from origin to final sale.', 'href': 'tecnologia'},
            ]
        }
    },

    'fulfillment': {
        'meta': {
            'title': 'Fulfillment & Pick-Pack | Ecommex',
            'description': 'Fulfillment for brands selling in Mexico. 99.9% accuracy, marketplace integration and SLAs we actually meet.'
        },
        'breadcrumb': {'services': 'Services', 'current': 'Fulfillment'},
        'hero': {
            'eyebrow': 'Fulfillment',
            'headline': 'Your orders ship same day, with no errors',
            'subheadline': 'Obsessive pick-pack, integration with your marketplaces and SLAs we actually meet. Your team stops fighting returns from operational errors.',
            'cta': 'Quote My Fulfillment',
            'ctaSecondary': 'How It Works',
            'stats': [
                {'value': '50000+', 'display': '50K+', 'label': 'Orders monthly'},
                {'value': '99.9%', 'display': '99.9%', 'label': 'Pick accuracy'},
                {'value': '<24h', 'display': '<24h', 'label': 'Ship-out SLA'},
                {'value': '15+', 'display': '15+', 'label': 'Marketplaces integrated'},
                {'value': '<2%', 'display': '<2%', 'label': 'Returns from errors'},
            ]
        },
        'whatsIncluded': {
            'headline': 'What our fulfillment includes',
            'subhead': 'More than boxes. It is the operation your customers notice.',
            'items': [
                {'title': 'Obsessive pick-pack', 'description': 'Double scanner verification. 99.9% accuracy is not marketing - it is the real number.'},
                {'title': 'Multi-channel integration', 'description': 'Shopify, Mercado Libre, Amazon, your own ecommerce. One operation.'},
                {'title': 'Custom packaging', 'description': 'Your brand, your unboxing. Materials that reflect your product quality.'},
                {'title': 'Labeling and manifests', 'description': 'Auto-generated shipping labels per marketplace. Zero manual errors.'},
                {'title': 'Kitting and bundling', 'description': 'Promo bundles assembled to spec without hidden fees.'},
                {'title': 'Synced inventory', 'description': 'Stock updated across all your channels in real time. No oversell.'},
            ]
        },
        'process': {
            'headline': 'How we process your orders',
            'subhead': '5 steps from order drop to ship-out.',
            'steps': [
                {'title': 'Order receipt', 'description': 'API integration with your channel. Order arrives in our system in seconds.'},
                {'title': 'Scanner pick', 'description': 'Operator picks each SKU verifying with scanner. Zero manual errors.'},
                {'title': 'Pack with your brand', 'description': 'Packaging per your brand specs. Inserts, protection, presentation.'},
                {'title': 'Labeling', 'description': 'Shipping label per marketplace or carrier. Auto-generated.'},
                {'title': 'Carrier handoff', 'description': 'Daily pickup. Your order is moving before the promised SLA.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Why Ecommex',
            'subhead': 'The operation that protects your brand.',
            'items': [
                {'tag': 'PRECISION', 'title': '99.9% pick accuracy', 'description': 'Double scan on every pick. Returns from operational errors are the #1 pain for brands - we eliminate them.', 'placeholder': 'Photo: operator with scanner / pick station'},
                {'tag': 'SPEED', 'title': 'Same day, no exceptions', 'description': 'Orders received before daily cutoff ship the same day. No peak season breaks our SLA.', 'placeholder': 'Photo: orders shipping / dock'},
                {'tag': 'MULTI-CHANNEL', 'title': 'One operation, all your channels', 'description': 'Marketplaces, own ecommerce, B2B. Same warehouse, same team, same quality.', 'placeholder': 'Photo: multi-channel dashboard'},
            ]
        },
        'pullquote': {
            'text': 'We dropped pick-error returns from 8% to 0.4% in the first month. The customer service team stopped putting out fires all day.',
            'name': 'Carlos Ramirez',
            'role': 'Head of Operations',
            'company': 'Vivante Mexico'
        },
        'faq': {
            'headline': 'Frequently asked questions',
            'subhead': 'What founders ask before starting fulfillment',
            'items': [
                {'question': 'How many orders per month do you handle?', 'answer': 'We process 50,000+ orders monthly for our current client base. We handle peak seasons (Buen Fin, Hot Sale) without degrading SLA.'},
                {'question': 'Do you integrate with my marketplace or ecommerce?', 'answer': 'Yes. Native integrations with Shopify, Mercado Libre, Amazon, WooCommerce and more. If you use a custom system, we integrate via API.'},
                {'question': 'What is the real ship-out SLA?', 'answer': 'Orders received before 14:00 ship same day. After cutoff, ship next day. No seasonal exceptions.'},
                {'question': 'Do you handle custom packaging?', 'answer': 'Yes. We work with your materials (boxes, inserts, fillers) or help you design them. Your brand, your unboxing.'},
                {'question': 'What if there is an error in an order?', 'answer': 'We cover the product refund and reshipping costs. But with 99.9% accuracy, errors are less than 0.1% of volume.'},
                {'question': 'Can you do kitting or bundles?', 'answer': 'Yes. Promo bundles, gift kits, seasonal combos. No hidden fees per composite SKU.'},
            ]
        },
        'related': {
            'headline': 'Related services',
            'subhead': 'What comes before and after fulfillment.',
            'items': [
                {'title': 'Warehousing', 'description': '12,000+ positions in GDL for your inventory.', 'href': 'almacenamiento'},
                {'title': 'Import & Customs', 'description': 'We move your merchandise from origin to the rack.', 'href': 'importacion'},
                {'title': 'Shipping Across Mexico', 'description': 'Last mile to the 32 states from GDL.', 'href': 'envios'},
                {'title': 'Returns Management', 'description': 'Reverse logistics that reintegrates inventory in 48h.', 'href': 'devoluciones'},
            ]
        }
    },

    'envios': {
        'meta': {
            'title': 'Shipping Across Mexico | Ecommex',
            'description': 'Last mile from Guadalajara to the 32 states. Multiple carriers, one platform, SLAs we actually meet.'
        },
        'breadcrumb': {'services': 'Services', 'current': 'Shipping'},
        'hero': {
            'eyebrow': 'Shipping',
            'headline': 'We reach all 32 states, no excuses',
            'subheadline': 'Last mile from Guadalajara with multiple carriers in one platform. Your customer receives, not waits.',
            'cta': 'Quote My Shipping',
            'ctaSecondary': 'How It Works',
            'stats': [
                {'value': '32', 'display': '32', 'label': 'States covered'},
                {'value': '5+', 'display': '5+', 'label': 'Carriers integrated'},
                {'value': '<48h', 'display': '<48h', 'label': 'National delivery'},
                {'value': '24h', 'display': '24h', 'label': 'GDL metro'},
                {'value': '98%', 'display': '98%', 'label': 'On-time delivery'},
            ]
        },
        'whatsIncluded': {
            'headline': 'What our shipping covers',
            'subhead': "More than moving boxes. It is your customer's last experience.",
            'items': [
                {'title': 'National coverage', 'description': 'All 32 states of Mexico. Rural areas included, not just metros.'},
                {'title': 'Multiple carriers', 'description': 'Estafeta, DHL, FedEx, regional couriers. We pick the best per route.'},
                {'title': 'Optimized rates', 'description': 'Aggregated volume from all Ecommex clients. Better rates than going direct.'},
                {'title': 'Unified tracking', 'description': 'One tracking number for your customer regardless of carrier.'},
                {'title': 'COD available', 'description': 'Cash on delivery for markets that still prefer it.'},
                {'title': 'Auto notifications', 'description': 'Your customer receives SMS and email at every shipment milestone.'},
            ]
        },
        'process': {
            'headline': 'How we handle your last mile',
            'subhead': "From warehouse to your customer's door in 5 steps.",
            'steps': [
                {'title': 'Carrier selection', 'description': 'Algorithm picks the best carrier per destination, weight and SLA.'},
                {'title': 'Label generation', 'description': 'Auto-generated label with your brand and recipient info.'},
                {'title': 'Daily pickup', 'description': 'Carriers pick up at our dock. Multiple departures per day.'},
                {'title': 'Monitored transit', 'description': 'Live tracking. Proactive delay detection.'},
                {'title': 'Delivery and notification', 'description': 'Customer receives. Auto notification to you and your system.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Why ship with Ecommex',
            'subhead': "It is not just shipping. It is your brand's last experience.",
            'items': [
                {'tag': 'COVERAGE', 'title': 'All 32 states, no gaps', 'description': 'We combine national and regional carriers to cover even areas others cannot. Your brand has no zone exceptions.', 'placeholder': 'Photo: coverage map / truck en route'},
                {'tag': 'OPTIMIZATION', 'title': 'Best rate per route', 'description': 'Aggregated volume gives us rates no individual client can negotiate. We pass the savings directly to you.', 'placeholder': 'Photo: shipping dashboard / rates'},
                {'tag': 'EXPERIENCE', 'title': 'Your customer knows where their order is', 'description': 'Auto SMS and email notifications. Your customer does not call support, they already know.', 'placeholder': 'Photo: SMS notification / customer'},
            ]
        },
        'pullquote': {
            'text': 'We used to have 4 contracts with 4 carriers. Now I have one contact and better rates than I could negotiate myself.',
            'name': 'Andrea Mendez',
            'role': 'Founder',
            'company': 'Bonita Naturals'
        },
        'faq': {
            'headline': 'Frequently asked questions',
            'subhead': 'What brands ask about shipping',
            'items': [
                {'question': 'Which carriers do you handle?', 'answer': 'Estafeta, DHL, FedEx, Paquete Express and regional couriers. We choose the best per destination, not by exclusive contract.'},
                {'question': 'What is the average delivery time?', 'answer': 'GDL metro: 24h. Major cities: 24-48h. Remote areas: 3-5 days. We give you specific SLA per destination at quoting.'},
                {'question': 'Do you cover rural areas?', 'answer': 'Yes. We combine national carriers with regional couriers to reach localities that the big ones do not.'},
                {'question': 'Do you handle COD (cash on delivery)?', 'answer': 'Yes, for markets that still need it. We settle collections with you weekly.'},
                {'question': 'How does tracking work?', 'answer': 'One tracking number for your customer regardless of the final carrier. Auto notifications at each milestone.'},
                {'question': 'What if a shipment is lost or damaged?', 'answer': 'Insurance coverage included. We handle the claim with the carrier and reimburse you.'},
            ]
        },
        'related': {
            'headline': 'Related services',
            'subhead': 'What comes before shipping.',
            'items': [
                {'title': 'Warehousing', 'description': '12,000+ positions in GDL where your inventory ships from.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment & Pick-Pack', 'description': 'Orders prepared with 99.9% accuracy.', 'href': 'fulfillment'},
                {'title': 'Import & Customs', 'description': 'We move your merchandise from origin.', 'href': 'importacion'},
                {'title': 'Technology & Integrations', 'description': 'Unified tracking on one platform.', 'href': 'tecnologia'},
            ]
        }
    },

    'devoluciones': {
        'meta': {
            'title': 'Returns Management | Ecommex',
            'description': 'Reverse logistics that reintegrates inventory in 48h. Inspection, refurbishment and traceability for every return.'
        },
        'breadcrumb': {'services': 'Services', 'current': 'Returns'},
        'hero': {
            'eyebrow': 'Returns',
            'headline': 'Reverse logistics that recovers your margin',
            'subheadline': 'We receive, inspect and reintegrate your returned merchandise in 48h. Returns stop being a loss and become available inventory.',
            'cta': 'Quote My Returns',
            'ctaSecondary': 'How It Works',
            'stats': [
                {'value': '48h', 'display': '48h', 'label': 'Avg reverse cycle'},
                {'value': '85%', 'display': '85%', 'label': 'Reintegrable to stock'},
                {'value': '100%', 'display': '100%', 'label': 'Inspection per SKU'},
                {'value': '24/7', 'display': '24/7', 'label': 'Returns visibility'},
                {'value': '<5%', 'display': '<5%', 'label': 'Refurbishment rate'},
            ]
        },
        'whatsIncluded': {
            'headline': 'What our returns management covers',
            'subhead': "Your margin does not vanish just because the customer changed their mind.",
            'items': [
                {'title': 'Centralized receiving', 'description': 'Your customers return to a single address. We receive them for you.'},
                {'title': 'Inspection per SKU', 'description': 'Every return is checked against criteria you define. Nothing passes without verification.'},
                {'title': 'Fast reintegration', 'description': '48h average from return to inventory available to sell again.'},
                {'title': 'Refurbishment when applicable', 'description': 'Minor-damage product is restored for sale as B-stock with your authorization.'},
                {'title': 'Scrap disposition', 'description': 'Non-recoverable merchandise is disposed of with documentation. Zero tax liability.'},
                {'title': 'Detailed reporting', 'description': 'Dashboard with return reasons, SKU rates and patterns to improve your product.'},
            ]
        },
        'process': {
            'headline': 'How we process your returns',
            'subhead': '5 steps from arrival to inventory.',
            'steps': [
                {'title': 'Return receipt', 'description': 'Arrival at returns dock, immediate registration in the system.'},
                {'title': 'Identification', 'description': 'Match against original order. Customer tracking, reason and date.'},
                {'title': 'Inspection', 'description': 'Visual and functional review per your criteria. Photo evidence.'},
                {'title': 'Disposition', 'description': 'Reintegrate, refurbish or dispose. Decided by rules you define.'},
                {'title': 'Closure', 'description': 'Inventory updated, customer notified, refund authorized if applicable.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Why manage returns with Ecommex',
            'subhead': 'Returns are not the end of the sale. They are the start of retention.',
            'items': [
                {'tag': 'SPEED', 'title': '48h to inventory', 'description': 'Most 3PLs take 1-2 weeks to process returns. We take 48h. Your cash flow does not wait.', 'placeholder': 'Photo: inspection station'},
                {'tag': 'RECOVERY', 'title': '85% goes back to selling', 'description': 'Rigorous inspection + refurbishment when applicable. Only 5% goes to scrap. The rest is recovered margin.', 'placeholder': 'Photo: restored product'},
                {'tag': 'INTELLIGENCE', 'title': 'Data to improve your product', 'description': 'Reports with return reasons by SKU. You spot quality problems before they go viral.', 'placeholder': 'Photo: analytics dashboard'},
            ]
        },
        'pullquote': {
            'text': 'We went from a warehouse full of unprocessed returns to having all of them reintegrated in 48h. We recovered 18% more margin than before.',
            'name': 'Roberto Salinas',
            'role': 'COO',
            'company': 'Pure Beauty Co'
        },
        'faq': {
            'headline': 'Frequently asked questions',
            'subhead': 'What brands ask about reverse logistics',
            'items': [
                {'question': 'How long does it take to process a return?', 'answer': '48h average from arrival to reintegrated in inventory or disposition decided. Peak seasons stay below 72h.'},
                {'question': 'Who decides if a product is reintegrated or not?', 'answer': 'You define the criteria (physical condition, functionality, packaging) and we apply the rule. Borderline cases are referred to you.'},
                {'question': 'Do you handle refurbishment?', 'answer': 'Yes. Minor-damage products can be restored for sale as B-stock or outlet, with your authorization per SKU.'},
                {'question': 'How do you handle customer refunds?', 'answer': 'We notify you of the inspection decision. Your team (or automation) processes the refund from your system. We do not touch your payment gateway.'},
                {'question': 'What happens with non-recoverable merchandise?', 'answer': 'Documented disposition (donation, recycling or disposal). We give you the certificate for your accounting.'},
                {'question': 'Do I have visibility on returns in progress?', 'answer': 'Yes. Real-time dashboard with each return: status, reason, decision, date. Weekly email reports.'},
            ]
        },
        'related': {
            'headline': 'Related services',
            'subhead': 'What connects with returns management.',
            'items': [
                {'title': 'Warehousing', 'description': 'Reintegrated inventory goes back to your pool in GDL.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment & Pick-Pack', 'description': 'Correct orders = fewer returns from errors.', 'href': 'fulfillment'},
                {'title': 'Shipping Across Mexico', 'description': 'Quality last mile reduces transit damage.', 'href': 'envios'},
                {'title': 'Technology & Integrations', 'description': 'Full visibility of your reverse operation.', 'href': 'tecnologia'},
            ]
        }
    },

    'tecnologia': {
        'meta': {
            'title': 'Technology & Integrations | Ecommex',
            'description': 'A platform connecting your inventory, marketplaces, ecommerce and our operation. One source of truth.'
        },
        'breadcrumb': {'services': 'Services', 'current': 'Technology'},
        'hero': {
            'eyebrow': 'Technology',
            'headline': 'Your operation, on one screen',
            'subheadline': 'WMS + portal + native integrations with your channels. Synced inventory, automated orders, real-time data. No Excel, no surprises.',
            'cta': 'See the Platform',
            'ctaSecondary': 'How It Works',
            'stats': [
                {'value': '30+', 'display': '30+', 'label': 'Native integrations'},
                {'value': '<5min', 'display': '<5min', 'label': 'Inventory sync'},
                {'value': '100%', 'display': '100%', 'label': 'API-first'},
                {'value': '24/7', 'display': '24/7', 'label': 'Visibility'},
                {'value': '99.9%', 'display': '99.9%', 'label': 'Portal uptime'},
            ]
        },
        'whatsIncluded': {
            'headline': 'What our platform includes',
            'subhead': 'Not an add-on. The foundation of the entire operation.',
            'items': [
                {'title': 'World-class WMS', 'description': 'Warehouse Management System tracking every movement by SKU, location and operator.'},
                {'title': 'Client portal', 'description': 'Your own view of inventory, orders and metrics. Secure 24/7 access from any device.'},
                {'title': 'Native integrations', 'description': 'Shopify, Mercado Libre, Amazon, WooCommerce and more. No custom development.'},
                {'title': 'Full REST API', 'description': 'For those needing custom integration. Clear documentation, sandbox available.'},
                {'title': 'Auto reports', 'description': 'Inventory, orders, returns, performance. By email or via dashboard.'},
                {'title': 'Configurable alerts', 'description': 'Low stock, delays, anomalies. You find out before it becomes a problem.'},
            ]
        },
        'process': {
            'headline': 'How we connect your operation',
            'subhead': '5 steps from contract to production.',
            'steps': [
                {'title': 'Technical discovery', 'description': 'We map your current channels, systems and volumes.'},
                {'title': 'Integration setup', 'description': 'We connect each channel with our WMS. Sandbox testing.'},
                {'title': 'Catalog upload', 'description': 'SKUs, variants, dimensions. Initial inventory sync.'},
                {'title': 'End-to-end testing', 'description': 'Test orders on every channel. Full flow validation.'},
                {'title': 'Go live', 'description': 'Production operation. Active monitoring the first 2 weeks.'},
            ]
        },
        'whyEcommex': {
            'headline': 'Why our technology',
            'subhead': 'Built for real 3PL, not for slide decks.',
            'items': [
                {'tag': 'CONNECTIVITY', 'title': 'Integrations that actually work', 'description': 'Native connections to the marketplaces and ecommerces that matter in Mexico. No middleware, no Zapier.', 'placeholder': 'Photo: integrations dashboard'},
                {'tag': 'CONTROL', 'title': 'Your view, not ours', 'description': 'Portal with per-user permissions. Your ops team sees orders, finance sees costs, executives see KPIs.', 'placeholder': 'Photo: client portal'},
                {'tag': 'RELIABILITY', 'title': '99.9% uptime, not marketing', 'description': 'Cloud stack with redundancy. Last year we had 23 minutes of total downtime. Real number.', 'placeholder': 'Photo: metrics dashboard'},
            ]
        },
        'pullquote': {
            'text': 'We used to live in Excel and WhatsApp messages. Now everything is on one screen and my ops team got back 15 hours a week.',
            'name': 'Daniela Ortiz',
            'role': 'CEO',
            'company': 'Estela Brand'
        },
        'faq': {
            'headline': 'Frequently asked questions',
            'subhead': 'What technical teams ask before migrating',
            'items': [
                {'question': 'Which platforms do you integrate with?', 'answer': 'Shopify, Mercado Libre, Amazon, WooCommerce, VTEX, Magento and more. If you use something custom, we integrate via API.'},
                {'question': 'How long is implementation?', 'answer': 'Standard integrations (Shopify, MELI): 1-2 weeks. Custom or multi-channel implementations: 3-4 weeks.'},
                {'question': 'Do you have a public API?', 'answer': 'Yes. Full REST API with documentation, sandbox and tech support for your dev team.'},
                {'question': 'What happens to my data if I leave the service?', 'answer': 'Your data is yours. We deliver a full export in CSV/JSON within 5 business days of request.'},
                {'question': 'Do you have an uptime SLA?', 'answer': '99.9% contractual uptime. Cloud stack with redundancy. 2024 we had 23 minutes total downtime.'},
                {'question': 'How do you handle data security?', 'answer': 'In-transit and at-rest encryption, mandatory 2FA, access auditing. Compliance with LFPDPPP (Mexican data law).'},
            ]
        },
        'related': {
            'headline': 'Related services',
            'subhead': 'Technology powers our entire operation.',
            'items': [
                {'title': 'Warehousing', 'description': 'Inventory synced in real time with your system.', 'href': 'almacenamiento'},
                {'title': 'Fulfillment & Pick-Pack', 'description': 'Automated orders from your channels.', 'href': 'fulfillment'},
                {'title': 'Shipping Across Mexico', 'description': 'Unified tracking on one platform.', 'href': 'envios'},
                {'title': 'Returns Management', 'description': 'Full visibility of the reverse flow.', 'href': 'devoluciones'},
            ]
        }
    }
}


def main():
    for fname, content in [('messages/es.json', ES), ('messages/en.json', EN)]:
        with open(fname, 'r', encoding='utf-8') as f:
            data = json.load(f)
        for slug, section in content.items():
            data['services'][slug] = section
        with open(fname, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            f.write('\n')
    print('Done. 5 services added to es.json and en.json.')


if __name__ == '__main__':
    main()

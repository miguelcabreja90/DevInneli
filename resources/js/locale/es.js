import es from 'vuetify/es5/locale/es'

export default {
  label: 'Español',
  // page login
  login: 'Iniciar sección',
  welcome_login: 'Ingrese a su cuenta de Inneli',
  reset_password: 'Cambiar contraseña',
  find_password: 'Enviar su contraseña',
  forgot: '¿Olvidó su contraseña?',
  have_pin: 'Bloquer Pantalla',
  pinTile: 'Pin Code',
  forgot_btn: 'Enviar',
  hint_forgot: 'Ingrese su correo electrónico y se le enviarán las instrucciones',
  username: 'Usuario',
  name: 'Nombre',
  no_defined: 'No definido',
  provider: 'Proveedor',
  email: 'Correo',
  holder_email: 'Dirección de correo de la compañía',
  firstName: 'Nombre',
  lastName: 'Apellidos',
  password: 'Contraseña',
  pinCode: 'Pin',
  confirm: 'Confirmación',
  register: 'Regístrate',
  no_account: '¿No tienes una cuenta?',
  noDefined: 'No definido',
  aboutMe: 'Acerca de mi',
  activeAccount:
        'Hola, su cuenta se ha creada, pero aún no ha sido activada. Por favor, acceda al correo registrado, se le ha enviado un mensaje para la activación.',
  confirm_password: 'Confirmar Contraseña',
  confirm_pinCode: 'Confirmar Pin',
  company: 'Compañía',
  first_name: 'Nombre(s)',
  last_name: 'Apellidos',
  description: 'Descripción',
  address: 'Dirección',
  city: 'Ciudad',
  country: 'País',
  currency: 'Moneda',
  change: 'Tasa de Cambio',
  province: 'Provincia',
  barCode: 'Código de Barras',
  position: 'Cargo',
  postal_code: 'Código Postal',
  about_me: 'Acerca de mi',
  phone: 'Teléfono',
  wait: 'Espere por favor...',
  phone_holder: 'Entre su número de teléfono',
  price: 'Precio',
  color: 'Color',
  principal: 'Principal',
  file: 'Archivo',
  system: 'Sistema',
  import_csv: 'Importando archivo',
  state: 'Estado',
  // menu
  menu: {
    setting: 'Configuración',
    home: 'Inicio',
    dashboard: 'Dashboard',
    access_denied: 'Acceso denegado',
    verify: 'Verificar Correo',
    welcome: 'Bienvenido',
    profile: 'Perfil',
    logout: 'Salir',
    user_list: 'Listado de Usuarios',
    employer_list: 'Listado de Empleados',
    user: 'Empleados',
    employee: 'Empleado',
    access: 'Permiso de acceso',
    keys: 'Llave para permiso',
    access_new: 'Nuevo Permiso de acceso',
    access_list: 'Lista de Permisos',
    client: 'Cliente',
    client_list: 'Listado de Clientes',
    articles: 'Artículos',
    category: 'Categoría',
    expense_category: 'Categoría de Gasto',
    expense_category_list: 'Listado de Categoría de Gastos',
    exchange_rate: 'Moneda extranjera',
    exchange_rate_list: 'Listado de Moneda extranjera',
    category_list: 'Listado de Categorías',
    product_list: 'Listado de Productos',
    modifiers_list: 'Listado de Modifiadores',
    discounts_list: ' Listado de Descuentos',
    shop: 'Tiendas',
    pay: 'Métodos de Pago',
    supplier: 'Proveedor',
    supplier_list: 'Listado de Proveedores',
    resume: 'Resumen',
    sell_product: 'Venta por Productos',
    sell_category: 'Venta por Categorías',
    sell_user: 'Venta por Empleado',
    sell_types_payment: 'Venta por tipos de pago',
    pinlogin: 'Pin Code',
    vending: 'Ventas',
    vending_new: 'Nueva Venta',
    vending_edit: 'Editar Venta',
    turnOn: 'Registrar Turno',
    product_add: 'Nuevo Artículo',
    product_edit: 'Editar Artículo',
    assistance: 'Tarjeta de asistencia',
    supply_product: 'Compras',
    supply_productS: 'Compra',
    supply_add: 'Nueva Compra',
    supply_edit: 'Editar Compra',
    finance: 'Finanzas',
    type_of_order: 'Tipo de Pedido',
    tax_list: 'Impuesto',
    discount: 'Descuento'
  },
  // settings
  settings: {
    title: 'Ajuste de Tema',
    color: 'Opciones de color',
    lang: 'Idioma',
    sidebar: 'Opción de barra lateral'
  },
  // rules
  rule: {
    required: '{0} es requerido',
    min: 'La cantidad mínima es de {0} caracteres',
    max: 'La cantidad máxima es de {0} caracteres',
    length: 'Este campo necesita {0} caracteres',
    match: 'Los parámetros {0} y la {1} no son iguales',
    bad_email: '{0} debe ser válido',
    bad_numeric: '{0} debe ser valor numérico',
    required_element: 'Este campo es requerido',
    bad_phone: '{0} debe ser válido',
    select: 'Seleccione',
    pin: {
      min: 'La cantidad mínima es de {0} digítos',
      max: 'La cantidad máxima es de {0} digítos'
    },
    general_required: 'Este campo es requerido'
  },
  // profile
  profile: {
    user: 'Usuario',
    edit_profile: 'Editar Perfil',
    sub_profile: 'Complete su perfil',
    btn_edit: 'Actualizar',
    company: 'Compañia',
    manager: 'Propietario'
  },
  messages: {
    refused: 'Fallido: Conexión rechazada.',
    success_avatar: 'La imagen se salvado satisfactoriamente.',
    warning_delete: 'No se podrá revertir esta acción!',
    error_delete_shop: 'Debe existir al menos una tienda',
    error_delete_manager: 'Este usuario no puede ser eliminado',
    error_edit_manager: 'Este usuario no puede ser editado. Use el perfil para editarlo.',
    success_profile: 'Los datos han sido actualizados.',
    success_add: '{0} ha sido creado satisfactoriamente.',
    success_up: '{0} ha sido actualizado satisfactoriamente.',
    success_del: '{0} ha sido eliminado satisfactoriamente.',
    failed_catch: 'Ocurrió error al procesar datos de {0}',
    check_mail:
            'Se ha enviado un correo electrónico con los detalles para cambiar contraseña.',
    password_success: 'La contraseña se actualizo correctamente.',
    warning_create: 'No se puede crear este elemento. Primero debe de crear {0}',
    sure_delete: 'Está seguro de eliminar este elemento?',
    dont_add: 'Ya este elemento se encuentra adicinado.',
    pin_failed: 'No tienes acceso. El código PIN no es válido',
    login_failed: 'Correo electrónico o contraseña no válidos.',
    login_failed_email: 'Este correo electrónico ya está en uso.',
    warning_composite: 'Si el artículo es compuesto, debe definir los elementos que lo componen',
    warning_price: 'No puede adicionar ese artículo. Si el precio es mayor que el costo, no le dará beneficios',
    warning_cant_article: 'No puede adicionar esta compra. Debe adicionar al menos un artículo.',
    warning_tax_cost: 'Usted está pagando mas de impuesto que el propio costo del producto.',
    warning_value_tax: 'El valor del impuesto no puede ser nulo ni cero',
    warning_article_service: 'Si no selecciona este campo el sistema asumirá que está creando un servicio y no podrá abastecerlo(Realizar una compra).',
    info_exchange_rate: 'La tasa de cambio es con respecto a 1',
    idle_title: 'Sesión expirada',
    idle_info: 'Ha dejado este navegador inactivo durante 10 minutos.',
    idle_counter: 'La sesión se cierra en {0} segundos',
    warning_ref: 'No puede adicionar ese artículo. La Referencia {0} ya está en uso.',
    warning_barCode: 'No puede adicionar ese artículo. El Código de Barras {0} ya está en uso.',
    info_import_category: 'Si este archivo contiene Categorías, serán importadas al sistema, pero si usted ya ha creado alguna antes de importar, ' +
       'y coinciden los nombres, entonces se mantendrán las antiguas, adjuntándole los nuevos artículos.',
    info_import_shop: 'Si este archivo contiene artículos relacionado con tiendas, las mismas serán importadas al sistema  con el país donde usted fue registrado, ' +
        'pero si usted ya ha creado alguna antes de importar, y coinciden los nombres, entonces se mantendrá la antigua, relacionándole los nuevos artículos. Si desea ' +
        'cambiar el país, luego de importarla, puede ir al menú de Configuración, sección de Tiendas y Editar la misma en el listado.',
    info_import_ref: 'Si usted ya ha creado Artículos y las Referencias coinciden con las de los Artículos importados, se le rescribirá a los nuevos artículos.',
    observation: 'Observación'
  },
  // options
  actions: {
    actions: 'Acciones',
    accept: 'Aceptar',
    search: 'Buscar',
    new: 'Nuevo',
    created: 'Crear',
    newF: 'Nueva',
    edit: 'Editar',
    show: 'Mostrar',
    delete: 'Eliminar',
    list: 'Listar',
    save: 'Guardar',
    cancel: 'Cancelar',
    close: 'Cerrar',
    change: 'Cambiar',
    apply: 'Aplicar',
    transfer: 'Transferir',
    next: 'Siguiente',
    back: 'Atrás'
  },
  titles: {
    list: 'Lista de {0}',
    new: 'Nuevo {0}',
    newF: 'Nueva {0}',
    edit: 'Editar {0}',
    show: 'Mostrar {0}',
    delete: 'Eliminar {0}',
    no_action: 'No puede {0}',
    newAction: 'Crear nuevo',
    importData: 'Importar'
  },
  access: {
    key: 'Llave',
    name: 'Cargo o Especialidad',
    accessPin: 'Acceso con Pin',
    accessEmail: 'Acceso con Correo',
    description: 'Descripción',
    keys: {
      atm: 'Cajero',
      waiter: 'Camarero',
      supervisor: 'Supervisor',
      seller: 'Vendedor',
      super_manager: 'CEO Administrador'
    },
    access: {
      manager_help: 'Defina que accines puede ejecutar',
      manager_article: 'Gestionar Artículos',
      article_list: 'Listar Artículos',
      article_add: 'Adicionar Artículos',
      article_edit: 'Editar Artículos',
      article_delete: 'Eliminar Artículos',
      article_transport: 'Trasladar Artículos',
      manager_vending: 'Gestionar Ventas',
      vending_list: 'Ver Lista Ventas',
      vending_add: 'Adicionar Nueva Venta',
      vending_edit: 'Editar Venta',
      vending_delete: 'Eliminar Venta',
      manager_category: 'Gestionar Categorías',
      category_list: 'Listar Categorías',
      category_add: 'Adicionar Nueva Categoría',
      category_edit: 'Editar Categoría',
      category_delete: 'Eliminar Categoría',
      manager_mod: 'Gestionar Modificadores',
      mod_list: 'Listar Modificadores',
      mod_add: 'Adicionar Modificador',
      mod_edit: 'Editar Modificador',
      mod_delete: 'Eliminar Modificador',
      manager_supplier: 'Gestionar Proveedores',
      supplier_list: 'Listar Proveedor',
      supplier_add: 'Adicionar Proveedor',
      supplier_edit: 'Editar Proveedor',
      supplier_delete: 'Eliminar Proveedor',
      manager_buy: 'Gestionar Compras',
      buy_list: 'Listar Compras',
      buy_add: 'Adicionar Nueva Compra',
      buy_edit: 'Editar Compra',
      buy_delete: 'Eliminar Compra',
      manager_sell: 'Ver Resumen de Ventas',
      sell_by_product: 'Ver Resumen de Ventas por Artículos',
      sell_by_category: 'Ver Resumen de Ventas por Categoría',
      sell_by_employer: 'Ver Resumen de Ventas por Empleados',
      sell_by_payments: 'Ver Resumen de Ventas por Métodos de Pago',
      manager_employer: 'Gestionar Empleados',
      employer_list: 'Listar Empleados',
      employer_add: 'Adicionar Empleado',
      employer_edit: 'Editar Empleado',
      employer_delete: 'Eliminar Empleado',
      manager_assistence: 'Gestionar Tarjeta de asistencia',
      assistance_list: 'Listar Tarjeta de asistencia',
      assistance_add: 'Adicionar Nueva Tarjeta de asistencia',
      assistance_edit: 'Editar Tarjeta de asistencia',
      assistance_delete: 'Eliminar Tarjeta de asistencia',
      manager_tax: 'Gestionar Impuesto',
      tax_list: 'Listar Impuesto',
      tax_add: 'Adicionar Impuesto',
      tax_edit: 'Editar Impuesto',
      tax_delete: 'Eliminar Impuesto',
      manager_discount: 'Gestionar Descuento',
      discount_list: 'Listar Descuento',
      discount_add: 'Adicionar Descuento',
      discount_edit: 'Editar Descuento',
      discount_delete: 'Eliminar Descuento',
      manager_client: 'Gestionar Clientes',
      client_list: 'Listar Cliente',
      client_add: 'Adicionar Cliente',
      client_edit: 'Editar Cliente',
      client_delete: 'Eliminar Cliente',
      config: 'Configuración',
      manager_shop: 'Gestionar Tienda',
      shop_list: 'Listar Tienda',
      shop_add: 'Adicionar Tienda',
      shop_edit: 'Editar Tienda',
      shop_delete: 'Eliminar Tienda',
      manager_access: 'Gestionar Permisos de acceso',
      access_list: 'Listar Permisos de acceso',
      access_add: 'Adicionar Permisos de acceso',
      access_edit: 'Editar Permisos de acceso',
      access_delete: 'Eliminar Permisos de acceso',
      manager_payment: 'Gestionar Métodos de Pagos',
      payment_list: 'Listar Métodos de Pagos',
      payment_add: 'Adicionar Métodos de Pago',
      payment_edit: 'Editar Métodos de Pago',
      payment_delete: 'Eliminar Métodos de Pago',
      manager_expense_category: 'Gestionar Categoría de Gasto',
      expense_category_list: 'Listar Categoría de Gasto',
      expense_category_add: 'AdicionarCategoría de Gasto',
      expense_category_edit: 'Editar Categoría de Gasto',
      expense_category_delete: 'Eliminar Categoría de Gasto',
      manager_exchange_rate: 'Gestionar Moneda extranjera',
      exchange_rate_list: 'Listar Moneda extranjera',
      exchange_rate_add: 'Adicionar Moneda extranjera',
      exchange_rate_edit: 'Editar Moneda extranjera',
      exchange_rate_delete: 'Eliminar Moneda extranjera',
      manager_type_of_order: 'Gestionar Tipos de Orden',
      type_of_order_list: 'Listar Tipos de Orden',
      type_of_order_add: 'Adicionar Tipos de Orden',
      type_of_order_edit: 'Editar Tipos de Orden',
      type_of_order_delete: 'Eliminar Tipos de Orden'
    }
  },
  assistance: {
    entry: 'Entrada',
    exit: 'Salida',
    entry_hour: 'Hora de Entrada',
    exit_hour: 'Hora de Salida',
    total_hours: 'Total de Horas'
  },
  component: {
    select: 'Selecciona columnas',
    others: 'otros',
    fieldColor: 'Elige un color',
    select_all: 'Seleccionar Todos',
    select_one: 'Seleccionar',
    active_select_filter: 'Filtros de selección activos',
    active_many_filter: 'Seleccionar filtros activos (de muchos)',
    many_filter: 'Seleccionar (de muchos)',
    active_switch_filter: 'Filtros de conmutador activo',
    download_csv: 'Descargar como archivo CSV',
    upload_csv: 'Importar archivo CSV',
    choose_columns: 'Elija columnas',
    reset_columns: 'Restablecer columnas',
    no_filters: 'No hay filtros habilitados',
    clear_filters: 'Borrar filtros',
    filter_data: 'Filtrar datos',
    filter_disabled: 'Filtro deshabilitado',
    loading: 'Cargando',
    images: {
      dragText: 'Arrastra la imagen (múltiple)',
      browseText: '(o) Seleccione ',
      primaryText: 'Defecto',
      markIsPrimaryText: 'Establecer como predeterminado ',
      popupText: 'Esta imagen se mostrará como predeterminada ',
      dropText: 'Suelta tu archivo aquí ...'
    },
    image: 'Imagen'
  },
  tips: {
    account_delete: 'Eliminar cuenta permanentemente.'
  },
  articles: {
    name: 'Artículo',
    names: 'Artículos',
    price: 'Precio',
    cost: 'Costo',
    percent: 'Margen',
    sell_by: 'Vendido por',
    unit: 'Unidad',
    p_v: 'P/Vol',
    ref: 'REF',
    inventory: 'Inventario',
    new_inventory: 'Nuevo Inventario',
    total_inventory: 'Inventorario Total',
    composite: 'Artículo compuesto',
    track_inventory: 'Seguir  inventario',
    itbis: 'ITBIS(18%)',
    tax: 'Impuesto',
    lay: 'Propina de ley(10%)',
    composite_text: 'Los artículos compuestos contienen una determinada cantidad de otros artículos'
  },
  panel: {
    basic: 'Básico',
    inventory: 'Inventario',
    variant: 'Variante',
    shop: 'Tienda'
  },
  variants: {
    variant: 'Variante',
    name: 'Nombre',
    price: 'Precio',
    cost: 'Costo',
    ref: 'REF',
    barCode: 'Código de Barras',
    options: 'Opciones',
    cant: 'Cantidad',
    total_cost: 'Costo Total',
    total_price: 'Precio Total',
    total_cant: 'Cantidad Total'
  },
  shop_article: {
    under_inventory: 'Bajo Inventario',
    stock: 'En Stock',
    enabled: 'Disponible'
  },
  representation: {
    representation: 'Representación',
    color_shape: 'Color',
    image: 'Imagen'
  },
  supply_product: {
    supply: 'Supply'
  },
  payment: {
    name: 'Método de Pago',
    cash: 'Efectivo',
    card: 'Targeta',
    check: 'Cheque',
    credit: 'Crédito',
    deposit: 'Depósito',
    wire_transfer: 'Transferencia Bancaria',
    digital_transfer: 'Transferencia Digital',
    other: 'Otro'
  },
  supplier: {
    name: 'Proveedor',
    identity: 'ID/Documento',
    phone: 'Teléfono',
    email: 'Correo',
    country: 'País',
    address: 'Dirección',
    contract: 'Número de Contrato',
    expense: 'Categoría de Gasto',
    note: 'Nota'
  },
  tax: {
    name: 'Impuesto',
    value: 'Valor',
    rate: 'Tasa',
    percent: 'Porciento',
    permanent: 'Fijo',
    noFacture: 'No. Factura',
    type: 'Tipo',
    include_tax: 'Incluido en el precio',
    added_tax: 'Adicionado al precio',
    option_tax: 'Aplicar a todos los artículos existentes',
    example: 'Ejemplo: Para un precio de 100 {1}, el {0}% sería: {0} {1}',
    to_pay_tax: 'A pagar por Impuesto',
    total_pay_tax: 'Total por Impuesto',
    to_pay_discount: 'A descontar',
    total_pay_discount: 'Total de Descuento'
  },
  pay: {
    counted: 'Contado',
    credit: 'Crédito',
    pay: 'Pago',
    extra_data: 'Datos adicionales',
    sub_total: 'Sub Total',
    total: 'Total'
  },
  supply: {
    name: 'Compra'
  },
  sale: {
    sale: 'Venta',
    selectArticle: 'Por favor seleccione el artículo',
    selectShop: 'Debe seleccionar una tienda',
    state: {
      open: 'En proceso',
      accepted: 'Aceptada',
      cancelled: 'Cancelada'
    },
    emptyArticle: 'Esta tienda no tiene artículos. Por favor abastezca la tienda'
  },
  report: {
    top5: 'Los 5 mas vendidos',
    netPrice: 'Ventas Netas',
    grossPrice: 'Ventas Brutas',
    discountsSale: 'Descuentos por Ventas',
    graphics: 'Gráfico',
    barGraphics: 'Gráfico de Barras',
    margin: 'Margen'
  },
  ...es
}

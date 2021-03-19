import en from 'vuetify/es5/locale/en'

export default {
  label: 'English',
  // page login
  login: 'Start section',
  welcome_login: 'Login to your Inneli account',
  reset_password: 'Change password',
  find_password: 'Submit your password',
  forgot: 'Forgot your password?',
  have_pin: 'Lock Screen',
  pinTile: 'Pin Code',
  date: 'Date',
  created_by: 'Created by',
  forgot_btn: 'Submit',
  hint_forgot: 'Enter your email and instructions will be sent to you',
  username: 'User',
  name: 'Name',
  no_defined: 'Undefined',
  provider: 'Provider',
  email: 'Mail',
  holder_email: 'Company email address',
  firstName: 'Name',
  lastName: 'Surname',
  password: 'Password',
  pinCode: 'Code',
  confirm: 'Confirmation',
  register: 'Register',
  no_account: 'Don\'t have an account?',
  noDefined: 'Undefined',
  aboutMe: 'About me',
  activeAccount:
'Hello, your account has been created, but it has not been activated yet. Please access the registered email, you have been sent a message for activation. ',
  confirm_password: 'Confirm Password',
  confirm_pinCode: 'Confirm Code',
  company: 'Company',
  first_name: 'Name (s)',
  last_name: 'Surname',
  description: 'Description',
  address: 'Address',
  slogan: 'Slogan',
  footer: 'Firm',
  city: 'City',
  country: 'Country',
  currency: 'Currency',
  change: 'Exchange Rate',
  province: 'Province',
  barCode: 'Bar Code',
  position: 'Cargo',
  postal_code: 'Postal Code',
  about_me: 'About me',
  phone: 'Phone',
  wait: 'Please wait ...',
  phone_holder: 'Enter your phone number',
  price: 'Price',
  onlinePrice: 'Online Price',
  cost: 'Cost',
  color: 'Color',
  main: 'Main',
  file: 'File',
  system: 'System',
  import_csv: 'Importing file',
  state: 'State',
  to: 'A',
  fromData: 'Realize By',
  guide: 'Click to start guide',
  referralLink: 'Referral link',
  // menu
  menu: {
    bank: 'Bank',
    setting: 'Configuration',
    shop_online: 'Online Shop',
    config_add: 'Shop Online Configuration',
    home: 'Home',
    shops: 'Shops',
    shop: 'Store',
    dashboard: 'Dashboard',
    admin_dashboard: 'Dashboard',
    access_denied: 'Access denied',
    verify: 'Verify Mail',
    welcome: 'Welcome',
    profile: 'Profile',
    logout: 'Exit',
    user_list: 'Users',
    employer_list: 'Employees',
    user: 'Employees',
    employee: 'Employees',
    access: 'Access permissions',
    keys: 'Keys for permission',
    access_new: 'New Access Permission',
    access_list: 'Permission List',
    client: 'Client',
    client_list: 'Clients',
    articles: 'Articles',
    article: 'Article',
    category: 'Category',
    expense_category: 'Expense Category',
    expense_category_list: 'List of Expense Category',
    exchange_rate: 'Foreign currency',
    exchange_rate_list: 'List of Foreign currency',
    category_list: 'List of Categories',
    bank_list: 'Bank List',
    boxes_list: 'List of Boxes',
    product_list: 'List of Products',
    modifiers_list: 'List of Modifiers',
    modifiers: 'Modifier',
    discounts_list: 'List of Discounts',
    pay: 'Payment Methods',
    supplier: 'Suppliers',
    supplier_list: 'List of Suppliers',
    resume: 'Summary',
    sell_product: 'Sale by Products',
    sell_category: 'Sale by Categories',
    sell_user: 'Sale by Employee',
    sell_types_payment: 'Sale by types of payment',
    pinlogin: 'Pin Code',
    refund: 'Refunds',
    boxes: 'Boxes',
    box: 'Box',
    vending: 'Sales',
    vending_new: 'New Sale',
    vending_edit: 'Edit Sale',
    turnOn: 'Register Shift',
    product_add: 'New Article',
    product_edit: 'Edit Article',
    assistance: 'Assistance card',
    buy_product: 'Purchases',
    buy_productS: 'Purchase',
    buy_add: 'New Purchase',
    buy_edit: 'Edit Purchase',
    supply_product: 'Order Request',
    supply_productS: 'Orders Request',
    supply_add: 'Orders Request',
    supply_edit: 'Edit Purchase',
    finance: 'Finance',
    type_of_order: 'List of Type of Order',
    tax_list: 'Tax',
    discount: 'Discount',
    discounts: 'Discounts',
    coin: 'Coin',
    affiliate: 'Partners'
  },
  // settings
  settings: {
    title: 'Theme Setting',
    color: 'Color options',
    lang: 'Language',
    sidebar: 'Sidebar option'
  },
  // rules
  rule: {
    required: '{0} is required',
    min: 'The minimum quantity is {0} characters',
    max: 'The maximum number is {0} characters',
    minCant: 'The minimum quantity is {0}',
    maxCant: 'The maximum quantity is {0}',
    between: 'The value of {0} must be between {1} and {2}',
    length: 'This field needs {0} characters',
    match: 'Parameters {0} and {1} are not equal',
    bad_email: '{0} must be valid',
    bad_numeric: '{0} must be numeric value',
    required_element: 'This field is required',
    bad_phone: '{0} must be valid',
    select: 'Select',
    pin: {
      min: 'The minimum quantity is {0}',
      max: 'The maximum amount is {0}'
    },
    general_required: 'This field is required'
  },
  // profile
  profile: {
    user: 'User',
    edit_profile: 'Edit Profile',
    sub_profile: 'Complete your profile',
    btn_edit: 'Update',
    company: 'Company',
    manager: 'Owner'
  },
  // error
  messages: {
    empty_elements: 'No exist elements.',
    refused: 'Failed: Connection refused.',
    success_avatar: 'The image was saved successfully.',
    warning_delete: 'This action cannot be reversed!',
    warning_exist_articles: "You can't delete this Category. Please delete articles first!",
    warning_digital_box: 'This box work automatically, to register online sales, and you can\'t manager.',
    warning_exist: 'Exist a variant with this name!',
    warning_excess_money: 'The defined amount to be charged is greater than or equal to the total price. Decrease the amounts already defined',
    warning_preform: 'You will create a Preform (PRE-FACTURE)' +
        'This will not be considered as a real sale until you define the Payment Method in the Additional Data Section',
    error_delete_shop: 'There must be at least one store',
    error_delete_manager: 'This user cannot be deleted',
    error_edit_manager: 'This user cannot be edited. Use the profile to edit it. ',
    success_profile: 'The data has been updated.',
    success_add: '{0} has been created successfully.',
    success_up: '{0} has been updated successfully.',
    success_del: '{0} has been successfully removed.',
    failed_catch: 'Error occurred while processing data from {0}',
    check_mail:
      'An email has been sent with the details to change password.',
    password_success: 'The password was updated successfully.',
    warning_create: 'Cannot create this element. First you must create {0} ',
    sure_delete: 'Are you sure to delete this item?',
    dont_add: 'This element is already added.',
    pin_failed: 'You don\'t have access. The PIN code is not valid ',
    login_failed: 'Invalid email or password.',
    register_exist_email: 'This email is already in use.',
    login_failed_exist_email: 'This email is not registered.',
    warning_no_category: 'You need select a Category',
    warning_composite: 'If the article is composite, you must define the elements that compose it',
    warning_price: 'You cannot add that item. If the price is higher than the cost, it will not give you profit ',
    warning_cant_article: "You can't do this action. You must add at least one item. ",
    warning_no_article: "You can't do this action. You must add at least one article in the system.",
    warning_no_clients_supplier: "You can't do this action. You need have a Supplier registered in system.",
    warning_supply_state: "You can't do this action. Supplier init the process, please Cancel the supply.",
    warning_supply_state_cancelled: "You can't do this action. Supply has been cancelled, is not important edited.",
    warning_supply_delete: "You can't do this action. You need Cancel this supply first, and then you can delete.",
    warning_exist_refunds: 'You cannot edit this Sale. This sale have refunds, please change state to Cancel o create a new Sale. ',
    warning_no_box: 'You cannot add this sale. You must add or select a box. ',
    warning_difference_price: 'There is a difference between the total price and the one defined in the payments of {0}. \n Please fix the difference. ',
    warning_tax_cost: 'You are paying more tax than the cost of the product itself.',
    warning_value_tax: 'The tax value cannot be null or zero',
    warning_refund_Cant: 'You have refunded {0} items, you can only refund between 0.00 and {1}',
    warning_refund_Money: 'You have refunded $' + '{0}, you can only refund between $ 0.00 and $' + '{1}',
    warning_refund_all: 'Unable to refund. You have refunded all money and items',
    warning_article_service: "If you do not select this field, the system will assume that you are creating a ' +\n'" +
        "        'service and you will not be able to supply it (Make a purchase). If you select then you can add existence in store or shop",
    info_exchange_rate: 'The exchange rate is with respect to 1',
    idle_title: 'Session expired',
    idle_info: 'You have left this browser idle for 10 minutes.',
    idle_counter: 'The session closes in {0} seconds',
    warning_ref: 'You cannot add that article. Reference {0} is already in use. ',
    warning_barCode: 'You cannot add that item. Barcode {0} is used by {1} and {2}',
    info_import_category: 'If this file contains Categories, they will be imported to the system, but if you have already created any before importing,' +
      'and the names match, then the old ones will be kept, attaching the new items.',
    info_import_shop: 'If this file contains items related to stores, they will be imported into the system with the country where you were registered,' +
      'but if you have already created one before importing, and the names match, then the old one will be kept, linking the new articles to it. If you want ' +
      'change the country, after importing it, you can go to the Settings menu, Stores section and Edit it in the list.',
    info_import_ref: 'If you have already created Articles and the References match those of the imported Articles, you will be rewritten to the new articles.',
    observation: 'Observation'
  },
  actions: {
    actions: 'Actions',
    refund: 'Refund',
    accept: 'Accept',
    open: 'Open',
    open_to: 'Open To',
    search: 'Search',
    new: 'New',
    created: 'Create {0}',
    newF: 'New',
    edit: 'Edit',
    show: 'Show',
    delete: 'Delete',
    list: 'List',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    change: 'Change',
    print: 'Print',
    apply: 'Apply',
    transfer: 'Transfer',
    next: 'Next',
    back: 'Back',
    yes: 'Yes',
    no: 'No',
    eye: 'See',
    minus: 'Minus',
    plus: 'Plus'
  },
  titles: {
    list: 'List of {0}',
    new: 'New {0}',
    newF: 'New {0}',
    edit: 'Edit {0}',
    show: 'Show {0}',
    delete: 'Delete {0}',
    no_action: 'Can\'t {0}',
    newAction: 'Create new',
    importData: 'Import'
  },
  access: {
    key: 'Key',
    name: 'Position or Specialty',
    accessPin: 'Access with Code',
    accessEmail: 'Access with Mail',
    description: 'Description',
    keys: {
      atm: 'Cashier',
      waiter: 'Waiter',
      supervisor: 'Supervisor',
      seller: 'Seller',
      super_manager: 'CEO Administrator'
    },
    access: {
      dashboard: 'Home',
      just_yours: 'Only those of the user',
      manager_help: 'Define what actions you can execute',
      manager_article: 'Manage Articles',
      list: 'List',
      create: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      import: 'Import',
      export: 'Export',
      boxes_open: 'Open Box',
      boxes_close: 'Close Box',
      transport: 'Move Items',
      manager_vending: 'Manage Sales',
      manager_refunds: 'Manage Refunds',
      manager_category: 'Manage Categories',
      manager_mod: 'Manage Modifiers',
      manager_supplier: 'Manage Suppliers',
      manager_order: 'Manage Order',
      manager_buy: 'Manage Purchases',
      manager_sell: 'See Sales Summary',
      sell_by_product: 'View Sales Summary by Items',
      sell_by_category: 'See Sales Summary by Category',
      sell_by_employer: 'See Sales Summary by Employees',
      sell_by_payments: 'See Sales Summary by Payment Methods',
      manager_employer: 'Manage Employees',
      manager_assistence: 'Manage Attendance Card',
      manager_tax: 'Manage Tax',
      manager_discount: 'Manage Discount',
      manager_boxes: 'Manage Boxes',
      manager_client: 'Manage Clients',
      config: 'Configuration',
      manager_shop: 'Manage Store',
      manager_access: 'Manage Access Permissions',
      manager_payment: 'Manage Payment Methods',
      manager_expense_category: 'Manage Expense Category',
      manager_exchange_rate: 'Manage Foreign Currency',
      manager_type_of_order: 'Manage Order Types'
    }
  },
  assistance: {
    entry: 'Entry',
    exit: 'Exit',
    entry_hour: 'Entry Time',
    exit_hour: 'Exit Time',
    total_hours: 'Total Hours'
  },
  component: {
    select: 'Select columns',
    others: 'Others',
    fieldColor: 'Choose a color',
    select_all: 'Select All',
    select_one: 'Select',
    active_select_filter: 'Active selection filters',
    active_many_filter: 'Select active filters (out of many)',
    many_filter: 'Select (from many)',
    active_switch_filter: 'Active switch filters',
    download_csv: 'Download as CSV file',
    upload_csv: 'Import CSV file',
    choose_columns: 'Choose columns',
    reset_columns: 'Reset columns',
    no_filters: 'No filters enabled',
    clear_filters: 'Clear filters',
    filter_data: 'Filter data',
    filter_disabled: 'Filter disabled',
    loading: 'Loading',
    images: {
      name: 'Images',
      dragText: 'Drag the image (multiple)',
      browseText: '(or) Select',
      primaryText: 'Default',
      markIsPrimaryText: 'Set as default',
      popupText: 'This image will show as default',
      dropText: 'Drop your file here ...'
    },
    logo: 'Logo',
    image: 'Image'
  },
  tips: {
    account_delete: 'Permanently delete account.',
    referrals_on: 'Activate referral system',
    referrals_off: 'Deactivate referral system',
    copy_link: 'Click to copy link'
  },
  articles: {
    name: 'Article',
    names: 'Articles',
    price: 'Price',
    cost: 'Cost',
    percent: 'Margin',
    sell_by: 'Sold by',
    unit: 'Unit',
    p_v: 'Weight/Volume',
    ref: 'Reference',
    inventory: 'Inventory',
    new_inventory: 'New Inventory',
    total_inventory: 'Total Inventory',
    composite: 'Composite article',
    track_inventory: 'Track inventory',
    itbis: 'ITBIS (18%)',
    tax: 'Tax',
    tax_by_sale: 'Taxes by Sale',
    taxes: 'Taxes',
    lay: 'Law tip (10%)',
    walking: 'Walking',
    composite_text: 'Composite articles contain a certain number of other articles',
    online_text: 'Articles will be inserted and sale online or not',
    onlineSale: 'Online Sale',
    onlineSale_text: 'This article will by sale in virtual shop'
  },
  panel: {
    basic: 'Basic',
    inventory: 'Inventory',
    variant: 'Variant',
    shop: 'Shop'
  },
  variants: {
    variant: 'Variant',
    name: 'Name',
    price: 'Price',
    cost: 'Cost',
    ref: 'Reference',
    barCode: 'Bar Code',
    options: 'Options',
    cant: 'Quantity',
    total_cost: 'Total Cost',
    total_price: 'Total Price',
    total_cant: 'Total Quantity'
  },
  shop_article: {
    under_inventory: 'Low Stock',
    stock: 'In Stock',
    enabled: 'Available',
    person_sale: 'Person Sale'
  },
  representation: {
    representation: 'Representation',
    color_shape: 'Color',
    image: 'Image'
  },
  buy_product: {
    supply: 'Supplier',
    emit: 'Supply Emit',
    received: 'Supply Received'
  },
  payment: {
    name: 'Payment Method',
    counted: 'Counted',
    cash: 'Cash',
    bank: 'Bank',
    credit_card: 'Credit Card',
    card: 'Card',
    check: 'Check',
    credit: 'Credit',
    deposit: 'Deposit',
    wire_transfer: 'Bank Transfer',
    digital_transfer: 'Digital Transfer',
    other: 'Other',
    pay_before: 'Pay before',
    pay_delay: 'Pay for delay',
    cant_pay: 'Pay',
    cant_charge: 'Charge',
    cant_back: 'Return'
  },
  supplier: {
    name: 'Provider',
    identity: 'ID / Document',
    phone: 'Phone',
    email: 'Mail',
    country: 'Country',
    address: 'Address',
    contract: 'Contract Number',
    expense: 'Expense Category',
    note: 'Note'
  },
  tax: {
    name: 'Tax',
    nameGeneral: 'General tax',
    value: 'Value',
    rate: 'Rate',
    percent: 'Percent',
    permanent: 'Fixed',
    noFacture: 'No. Bill',
    type: 'Type',
    include_tax: 'Included in the price',
    added_tax: 'Added to price',
    option_tax: 'Apply to all existing articles',
    example: 'Example: For a price of 100 {1}, the {0}% would be: {0} {1}',
    to_pay_tax: 'To pay for Tax',
    total_pay_tax: 'Total for Tax',
    to_pay_discount: 'To discount',
    total_pay_discount: 'Total Discount'
  },
  pay: {
    counted: 'Counted',
    credit: 'Credit',
    pay: 'Payment',
    pays: 'Payments',
    extra_data: 'Additional data',
    sub_total: 'Sub Total',
    total: 'Total'
  },
  supply: {
    name: 'Purchase'
  },
  sale: {
    sale: 'Sale',
    online_text: 'This sale will be online, and reported by Digital Box',
    selectArticle: 'Please select the article',
    no_article: 'No exist articles in this shop, please first create articles',
    selectShop: 'You must select a store',
    discountGeneral: 'General discount',
    clear_cart: 'Clear Cart',
    ticket: 'TICKET SALE',
    facture: 'Facture',
    cart: 'Cart',
    cant_money: 'Cant of Money',
    state: {
      open: 'In process',
      preform: 'Preform',
      accepted: 'Accepted',
      cancelled: 'Canceled',
      close: 'Closed'
    },
    emptyArticle: 'This shop has no items. Please stock the store '
  },
  box_state: {
    open: 'Open',
    close: 'Close'
  },
  report: {
    contact_us: 'Contact Us',
    cant: 'Cant',
    print_ticket: 'Print Ticket',
    print_letter: 'Print Letter',
    breakdown: 'Breakdown',
    sale_footer: '¡THANK YOU FOR SHOPPING IN OUR STORE!',
    top5Category: 'The 5 Categories that sell the most',
    top5Articles: 'The 5 Articles that sell the most',
    top5Payment: 'The Payment Methods that are sold the most',
    netPrice: 'Net Sales',
    grossPrice: 'Gross Price',
    grossSale: 'Gross sale',
    discountsSale: 'Sales Discounts',
    graphics: 'Graphic',
    noTop5: 'There are no sales to display information',
    barGraphics: 'Bar Graph',
    margin: 'Margin'
  },
  sector: {
    name: 'Sector',
    arts: 'Art',
    rental: 'Rental',
    food: 'Food',
    drink: 'Drinks',
    health: 'Health',
    agricultural: 'Agricultural',
    industrial: 'Industrial',
    hostelry: 'Hospitality',
    home: 'Home',
    shops: 'Shops',
    ironmongery: 'Hardware store',
    restaurant: 'Restaurants',
    tourism: 'Tourism',
    construction: 'Construction',
    service: 'Services',
    technologies: 'Technologies',
    consultancy: 'Consulting',
    education: 'Education',
    entertainment: 'Entertainment',
    automotive: 'Automotive',
    transport: 'Transport',
    real_state: 'Real estate',
    others: 'Others'

  },
  dashboard: {
    sales: 'Sales',
    salesSub: 'Sales increase',
    expenses: 'Expenses',
    expensesSub: 'Total expenses',
    costs: 'Costs',
    costsSub: 'Total costs',
    revenue: 'Income',
    revenueSub: 'Increase in revenue',
    orders: 'Orders',
    ordersSub: 'Increase of orders',
    info: 'Information',
    access: 'Accesses',
    mergeTable: 'Profit margin',
    timeLine: 'Last invoices',
    timeLineText: 'has created new sale for customer'
  },
  boxes: {
    difference: 'Difference',
    init: ' Initial Balance',
    final: 'Final Balance'
  },
  tour: {
    buttonSkip: 'Skip',
    buttonPrevious: 'Previous',
    buttonNext: 'Next',
    buttonStop: 'End',
    initGuide: 'Click to start guide'
  },
  tourMsg: {
    step1: '<strong>INNELI</strong>!<br> Welcome to our system',
    step2: '<strong>Menu</strong>!<br> Here we find the main functionalities by modules',
    step3: '<strong> Configuration </strong><br> General <a href="/setting" style="color:#4fc08d">configuration</a> elements ',
    step4: '<strong>Management of Articles</strong>!<br> ' +
      '<a href="/articles/product.list" style="color:#4fc08d">Products</a><br>' +
      '<a href="/articles/category.list" style="color:#4fc08d">Categories</a>',
    step5: '<strong> Sales Management </strong>! <br>' +
      '<a href="/sales/vending.list" style="color:#4fc08d">Sales </a><br>' +
      '<a href="/sales/refund.list" style="color:#4fc08d">Refunds </a><br>' +
      '<a href="/sales/boxes.list" style="color:#4fc08d">Boxes </a>',
    step6: '<strong> Employee management </strong>! <br>' +
      '<a href="/users/employer.list" style="color:#4fc08d">Employee</a> list  <br>' +
      '<a href="/users/assistance.list" style="color:#4fc08d">Attendance</a> cards',
    step7: '<strong> Management of <a href="/clients/client.list" style="color:#4fc08d"> clients </a> </strong>!',
    step8: '<strong> Managing my finances </strong>! <br>' +
      '<a href="/finance/supplier.list" style="color:#4fc08d">Suppliers </a> <br>' +
      '<a href="/finance/buy_list" style="color:#4fc08d">Purchasing management </a>',
    step9: '<strong>Summary</strong>!<br>Graphical summary of my sales',
    step10: '<strong> Nav Icon </strong>! <br> Open and close the general menu',
    step11: '<strong> Lock Icon </strong>! <br> Lock screen or app',
    step12: '<strong> Full Screen Icon </strong>! <br> Open the application in full screen',
    step13: '<strong> Sales </strong>! <br> Direct access to product sales',
    step14: '<strong> Purchases </strong>! <br> Direct access to product purchases',
    step15: '<strong> Language selector </strong>! <br> Language selector for display',
    step16: '<strong> User Icon </strong>! <br>' +
      '<a href="/user/profile" style="color:#4fc08d"> Profile </a> <br>' +
      'Sing Out',
    step17: '<strong> Theme Setting </strong>! <br> Select application colors, languages and styles',
    step18: '<strong> General statistics </strong>! <br> Main company indicators'
  },
  um: {
    name: 'Unit of measurement',
    distance: 'Distance',
    u: 'Unit',
    mm: 'Millimeter',
    cm: 'Centimeter',
    pp: 'Inch',
    m: 'Meter',
    footer: 'Foot',
    yard: 'Yard',
    km: 'Kilometer',
    mll: 'Mile',
    temp: 'Temperature',
    c: 'Celsius',
    k: 'Kelvin',
    f: 'Faraday',
    time: 'Time',
    s: 'Second',
    mt: 'Minute',
    h: 'Hora',
    d: 'Día',
    ms: 'Mass',
    mg: 'Milligram',
    g: 'Gram',
    kg: 'Kilogram',
    ton: 'Toned',
    lb: 'Libra',
    oz: 'Pound',
    velocity: 'Velocity',
    m_s: 'Metro/Segundo',
    km_h: 'Kilometer/Hors',
    ms2: 'Acceleration',
    vol: 'Volume',
    gl: 'Gallon',
    l: 'Liter',
    m3: 'Metro cubic',
    m2: 'Metro square',
    digital: 'Digital',
    bit: 'Bit',
    byte: 'Byte',
    mega: 'Mega',
    tr: 'Tera',
    px: 'Pixel',
    mPx: 'MegaPixel',
    other: 'Others',
    mhz: 'Microhertz',
    hz: 'Hertz',
    hom: 'Ohmio',
    volt: 'Volt',
    amp: 'Ampere',
    joule: 'Joule'
  },
  helpSales: {
    listStep1: '<strong> Add button </strong>! <br> Create new sale',
    listStep2: '<strong> Filters </strong>! <br> Set search filters and download data',
    listStep3: '<strong> List </strong>! <br> List of all sales created.'
  },
  helpSaleManager: {
    selectShop: 'Select Shop',
    selectBox: 'Select the Box where you sell. If the box is closed, then the system will open it with $0.00',
    addBox: 'Add a new Box',
    selectArticle: 'Select all articles that you will sell'
  },
  supply_state: {
    state: {
      state: 'State',
      requested: 'Requested',
      accepted: 'accepted',
      process: 'Process',
      ship: 'Ship',
      received: 'Received',
      cancelled: 'Cancelled'
    }
  },
  online: {
    template: 'Template',
    showing: 'Showing',
    of: 'of',
    credits_pay: 'Pay Credentials',
    paypal_credit: 'PayPal Credentials',
    paypal_client_id: 'CLIENT ID',
    paypal_secret: 'PAYPAL SECRET'
  },
  notifications: {
    supplier_is_register: 'Your Supllier {0} is register in INNELI. You can make Orders using the system',
    solicited_supply: 'Client {0} has registered a supply'
  },
  bank: {
    count_number: 'Count Number',
    type_operation: 'Type of Operation Banking'
  },
  partners: {
    referrals: 'Referral count',
    referralsSub: 'Linked referral count',
    referrer: 'Referenced',
    referrerSub: 'Referenced by company',
    not_specified: 'Not Specified',
    referralsList: 'Referrals List',
    activate: 'Activate your Referral Program',
    description: 'If you invite a person and this person pays for a membership, you get a free month. ' +
     'If you get 10 people to sign up as your referrals, you get $ 100 as a thank you.',
    confirm_copied: 'Your referral link has been copied: ',
    error_copied: 'The text could not be copied'
  },
  accounting_category: {
    name: 'Accounting Category',
    accounting_accounts: 'Accounting Accounts',
    actives: 'Actives',
    pasives: 'Pasives',
    income: 'Income',
    expenses: 'Exprenses'
  },
  ...en
}

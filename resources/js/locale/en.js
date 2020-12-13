import en from 'vuetify/es5/locale/en'

export default {
  label: 'English',
  // page login
  login: 'Log in',
  welcome_login: 'Login to your Inneli account',
  forgot: 'Forgot Password?',
  have_pin: 'Lock Screen',
  pinTile: 'Pin Code',
  reset_password: 'Reset Password',
  find_password: 'Enter your password',
  forgot_btn: 'Send',
  hint_forgot: 'Enter your Email and instructions will be sent to you!',
  username: 'Username',
  name: 'Name',
  no_defined: 'No defined',
  provider: 'Provider',
  firstName: 'First Name',
  lastName: 'Last Name',
  description: 'Description',
  email: 'Email',
  holder_email: 'Enter company email address',
  password: 'Password',
  pinCode: 'Pin',
  confirm: 'Confirm',
  register: 'Sign up',
  no_account: 'Don\'t have an account?',
  noDefined: 'No defined',
  aboutMe: 'About me',
  activeAccount:
        'Hello, your account has been created, but it has not been activated yet. Please access the registered email, you have been sent a message for activation.',
  confirm_password: 'Confirm Password',
  confirm_pinCode: 'Confirm Pin Code',
  company: 'Company',
  first_name: 'First Name',
  last_name: 'Last Name',
  address: 'Address',
  city: 'City',
  country: 'Country',
  currency: 'Currency',
  change: 'Exchange Rate',
  province: 'Province',
  barCode: 'Bar Code',
  position: 'Position',
  postal_code: 'Postal Code',
  about_me: 'About Me',
  phone: 'Phone',
  wait: 'Please a wait...',
  phone_holder: 'Enter a phone number',
  price: 'Price',
  color: 'Color',
  principal: 'Principal',
  file: 'File',
  system: 'System',
  import_csv: 'Getting your file',
  state: 'State',
  // menu
  menu: {
    setting: 'Setting',
    home: 'Home',
    dashboard: 'Dashboard',
    admin_dashboard: 'Dashboard',
    access_denied: 'Access Deny',
    verify: 'Email Verify',
    welcome: 'Welcome',
    profile: 'User Profile',
    logout: 'Logout',
    user_list: 'User List',
    employer_list: 'Employees List',
    user: 'Users',
    employee: 'Employee',
    access: 'Access permission',
    keys: 'Keys for permission',
    access_new: 'New Access permission',
    access_list: 'Permission List',
    client: 'Client',
    client_list: 'Client List',
    articles: 'Articles',
    category: 'Category',
    expense_category: 'Expense Category',
    expense_category_list: 'Expense Categories',
    exchange_rate: 'Foreign currency',
    exchange_rate_list: 'Foreign currency List',
    category_list: 'Category List',
    product_list: 'Product List',
    modifiers_list: 'Modifiers List',
    discounts_list: 'Discounts List',
    shop: 'Shops',
    pay: 'Payment Method',
    supplier: 'Supplier',
    supplier_list: 'Supplier List',
    resume: 'Resume',
    sell_product: 'Sale by Products',
    sell_category: 'Sale by Categories',
    sell_user: 'Sale by Employees',
    sell_types_payment: 'Sale by types of payment',
    pinlogin: 'Pin Code',
    vending: 'Sales',
    vending_new: 'New Sale',
    vending_edit: 'Edit Sale',
    turnOn: 'Register Shift',
    product_add: 'New Article',
    product_edit: 'Edit Article',
    assistance: 'Assistance card',
    supply_product: 'Buy',
    supply_products: 'Buy',
    supply_add: 'New Buy',
    supply_edit: 'Edit Buy',
    finance: 'Finance',
    type_of_order: 'Type of Order',
    tax_list: 'Tax',
    discount: 'Discount'
  },
  // settings
  settings: {
    title: 'Theme Settings',
    color: 'Color Options',
    lang: 'Language',
    sidebar: 'Sidebar Option'
  },
  rule: {
    required: '{0} is required',
    min: 'Just a minimum of {0} characters is allowed',
    max: 'Just a maximum of {0} characters is allowed',
    length: 'This field need {0} characters',
    match: '{0} and {1} do not match',
    bad_email: '{0}  must be valid',
    required_element: 'This element is required',
    bad_phone: '{0}  must be valid',
    bad_numeric: '{0}  must be numeric valid',
    select: 'Select',
    pin: {
      min: 'Just a minimum of {0} digits is allowed',
      max: 'Just a maximum of {0} digits is allowed'
    }
  },
  // error
  messages: {
    refused: 'Failed: Connections refused.',
    success_avatar: 'The image was successfully saved.',
    warning_delete: 'You won\'t be able to revert this!',
    error_delete_shop: 'There must be at least one shop',
    error_delete_manager: "You can't delete this user",
    error_edit_manager: "You can't edit this user. Use profile to edit.",
    success_profile: 'The data has been updated.',
    success_add: '{0} has been created successfully.',
    success_up: '{0} has been updated successfully.',
    success_del: '{0} has been removed successfully.',
    failed_catch: 'An error occurred while processing data from {0}',
    check_mail:
            'An email has been sent with the details to change password.',
    password_success: 'The password was updated successfully.',
    warning_create: "You can't create this element. You should create {0}",
    pin_failed: 'You do not have access. Pin Code is not valid',
    login_failed: 'Invalid email or password.',
    login_failed_email: 'This Email is used by other user.',
    warning_composite: 'This article is composite, please select the element that compose it ',
    warning_price: "You can't create this article.The cost can't be higher than price",
    warning_cant_article: "You can't create this buy. You need select at least one article",
    warning_tax_cost: 'You are paying more tax than the cost of the product.',
    warning_value_tax: "The tax value can't by null or zero",
    warning_article_service: "If you don't select this field, the system will assume that you are creating a service and you will not be able to supply it (Make a buy)",
    info_exchange_rate: 'The rate of change is with respect to 1',
    idle_title: 'Session Expired',
    idle_info: 'You have left this browser idle for 10 minutes.',
    idle_counter: 'The session closes in {0} seconds',
    warning_ref: "You can't create this article. The Reference {0} exist.",
    warning_barCode: "You can't create this article. The Bar Code {0} exist.",
    info_import_category: 'If this file contains Categories, they will be imported into the system, but if you have already created some before importing, ' +
        'and the names match, then the old ones will be kept, attaching the new articles.',
    info_import_shop: 'If this file contains articles related to shops, they will be imported into the system with the country where you were registered, ' +
        'but if you have already created one before importing, and the names match, then the old one will be kept, relating it to the new articles. ' +
        'If you want to change the country, after importing it, you can go to the Configuration menu, Shops section and Edit it in the list.',
    info_import_ref: 'If you have already created Articles and the References match those of the imported Articles, you will be rewritten to the new articles',
    observation: 'Observation'
  },
  // profile
  profile: {
    user: 'User',
    edit_profile: 'Edit Profile',
    sub_profile: 'Complete your profile',
    btn_edit: 'Update',
    company: 'Company',
    manager: 'CEO Manager'
  },
  // options
  actions: {
    actions: 'Actions',
    refund: 'Refund',
    accept: 'Accept',
    search: 'Search',
    new: 'New',
    created: 'Create',
    newF: 'New',
    show: 'Show',
    edit: 'Edit',
    delete: 'Delete',
    list: 'List',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    change: 'Change',
    apply: 'Apply',
    transfer: 'Transfer',
    next: 'Next',
    back: 'Back'
  },
  titles: {
    list: '{0} List',
    new: 'New {0}',
    newF: 'New {0}',
    edit: 'Edit {0}',
    show: 'Show {0}',
    delete: 'Delete {0}',
    no_action: "Can't {0}",
    newAction: 'Create new',
    importData: 'Import'
  },

  access: {
    key: 'Key',
    name: 'Position or specialty',
    accessPin: 'Access with Pin Code',
    accessEmail: 'Access with Email',
    description: 'Description',
    keys: {
      atm: 'ATM',
      waiter: 'Waiter',
      supervisor: 'Supervisor',
      seller: 'Seller',
      super_manager: 'CEO Manager'
    },
    access: {
      manager_help: 'Define the actions',
      manager_article: 'Manager Articles',
      article_list: 'List Articles',
      article_add: 'Create Articles',
      article_edit: 'Edit Articles',
      article_delete: 'Delete Articles',
      article_transport: 'Move Articles',
      manager_vending: 'Manager Sales',
      vending_list: 'List Sales',
      vending_add: 'Create Nueva Sale',
      vending_edit: 'Edit Sale',
      vending_delete: 'Delete Sale',
      manager_category: 'Manager Categories',
      category_list: 'List Categories',
      category_add: 'Create Category',
      category_edit: 'Edit Category',
      category_delete: 'Delete Category',
      manager_mod: 'Manager Modifiers',
      mod_list: 'List Modifiers',
      mod_add: 'Create Modifier',
      mod_edit: 'Edit Modifier',
      mod_delete: 'Delete Modifier',
      manager_supplier: 'Manager Suppliers',
      supplier_list: 'List Supplier',
      supplier_add: 'Create Supplier',
      supplier_edit: 'Edit Supplier',
      supplier_delete: 'Delete Supplier',
      manager_buy: 'Manager Buy',
      buy_list: 'List Buy',
      buy_add: 'Create Buy',
      buy_edit: 'Edit Buy',
      buy_delete: 'Delete Buy',
      manager_sell: 'Resume de Sales',
      sell_by_product: 'Resume of Sales por Articles',
      sell_by_category: 'Resume of Sales por Category',
      sell_by_employer: 'Resume of Sales por Employers',
      sell_by_payments: 'Resume of Sales por Payments',
      manager_employer: 'Manager Employers',
      employer_list: 'List Employers',
      employer_add: 'Create Employer',
      employer_edit: 'Edit Employer',
      employer_delete: 'Delete Employer',
      manager_assistence: 'Manager Assistance card',
      assistance_list: 'List Assistance card',
      assistance_add: 'Create Assistance card',
      assistance_edit: 'Edit Assistance card',
      assistance_delete: 'Delete Assistance card',
      manager_tax: 'Manager Tax',
      tax_list: 'List Tax',
      tax_add: 'Create Tax',
      tax_edit: 'Edit Tax',
      tax_delete: 'Delete Tax',
      manager_discount: 'Manager Discount',
      discount_list: 'List Discount',
      discount_add: 'Create Discount',
      discount_edit: 'Edit Discount',
      discount_delete: 'Delete Discount',
      manager_client: 'Manager Clients',
      client_list: 'List Client',
      client_add: 'Create Client',
      client_edit: 'Edit Client',
      client_delete: 'Delete Client',
      config: 'Setting',
      manager_shop: 'Manager Shop',
      shop_list: 'List Shop',
      shop_add: 'Create Shop',
      shop_edit: 'Edit Shop',
      shop_delete: 'Delete Shop',
      manager_access: 'Manager Access permit',
      access_list: 'List Access permit',
      access_add: 'Create Access permit',
      access_edit: 'Edit Access permit',
      access_delete: 'Delete Access permit',
      manager_payment: 'Manager Payments',
      payment_list: 'List Payments',
      payment_add: 'Create Payments',
      payment_edit: 'Edit Payments',
      payment_delete: 'Delete Payments',
      manager_expense_category: 'Manager Expense Category',
      expense_category_list: 'List Expense Category',
      expense_category_add: 'CreateExpense Category',
      expense_category_edit: 'Edit Expense Category',
      expense_category_delete: 'Delete Expense Category',
      manager_exchange_rate: 'Manager Exchange Rate',
      exchange_rate_list: 'List Exchange Rate',
      exchange_rate_add: 'Create Exchange Rate',
      exchange_rate_edit: 'Edit Exchange Rate',
      exchange_rate_delete: 'Delete Exchange Rate',
      manager_type_of_order: 'Manager Type of Order',
      type_of_order_list: 'List Type of Order',
      type_of_order_add: 'Create Type of Order',
      type_of_order_edit: 'Edit Type of Order',
      type_of_order_delete: 'Delete Type of Order'
    }
  },
  assistance: {
    entry: 'Entry',
    exit: 'Exit',
    entry_hour: 'Entry Hour',
    exit_hour: 'Exit Hour',
    total_hours: 'Total Hours'
  },
  component: {
    select: 'Select Columns',
    others: 'others',
    fieldColor: 'Please choose a color',
    select_all: 'Select All',
    select_one: 'Select',
    active_select_filter: 'Active Select Filters',
    active_many_filter: 'Active Select (From Many) Filters',
    many_filter: 'Select (From Many)',
    active_switch_filter: 'Active Switch Filters',
    download_csv: 'Download as CSV file',
    upload_csv: 'Upload a CSV file',
    choose_columns: 'Choose Columns',
    reset_columns: 'Reset Columns',
    no_filters: 'No filters enabled',
    clear_filters: 'Clear Filters',
    filter_data: 'Filter Data',
    filter_disabled: 'Filter Disabled',
    loading: 'Loading',
    images: {
      dragText: 'Drag the image (multiple)',
      browseText: '(or) Select',
      primaryText: 'Default',
      markIsPrimaryText: 'Set as default',
      popupText: 'This image will be displayed as default',
      dropText: 'Drop your file here ...'
    },
    image: 'Picture'
  },
  tips: {
    account_delete: 'Permanently delete account.'
  },
  articles: {
    name: 'Article',
    names: 'Articles',
    price: 'Price',
    cost: 'Cost',
    percent: 'Margin',
    sell_by: 'Sell by',
    unit: 'Unit',
    p_v: 'P/Vol',
    ref: 'REF',
    inventory: 'Inventory',
    new_inventory: 'New Inventory',
    total_inventory: 'Total Inventory',
    composite: 'Composite article',
    track_inventory: 'Track inventory',
    itbis: 'ITBIS(18%)',
    tax: 'Tax',
    lay: 'Law tip (10%)',
    composite_text: 'Compound articles contain a certain number of other articles'
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
    ref: 'REF',
    barCode: 'Bar Code',
    options: 'Options',
    cant: 'Quantify',
    total_cost: 'Total Cost',
    total_price: 'Total Price',
    total_cant: 'New Quantify'
  },
  shop_article: {
    under_inventory: 'Low Inventory',
    stock: 'Stock',
    enabled: 'Enabled'
  },
  representation: {
    representation: 'Representation',
    color_shape: 'Color',
    image: 'Image'
  },
  product_inventory: {
    supply: 'Supply'
  },
  payment: {
    name: 'Payment Method',
    cash: 'Cash',
    card: 'Card',
    check: 'Check',
    credit: 'Credit',
    deposit: 'Deposit',
    wire_transfer: 'Wire Transfer',
    digital_transfer: 'Digital Transfer',
    other: 'Other'
  },
  supplier: {
    name: 'Supplier',
    identity: 'ID/Document',
    phone: 'Phone',
    email: 'Email',
    country: 'Country',
    address: 'Address',
    contract: 'Contract Number',
    expense: 'Expense Category',
    note: 'Note'
  },
  tax: {
    name: 'Tax',
    value: 'Value',
    rate: 'Rate',
    percent: 'Percent',
    permanent: 'Permanent',
    noFacture: 'No. Facture',
    type: 'Type',
    include_tax: 'Included in the price',
    added_tax: 'Added to the price',
    option_tax: 'Apply to existing articles',
    example: 'Example: For a price of 100 {1}, the {0}% would: {0} {1}',
    to_pay: 'To page by Tax',
    total_pay: 'Total by Tax'
  },
  pay: {
    counted: 'Counted',
    credit: 'Credit',
    pay: 'Payment',
    extra_data: 'Additional Data',
    sub_total: 'Sub Total',
    total: 'Total'
  },
  supply: {
    name: 'Buy'
  },
  sale: {
    sale: 'Sale',
    selectArticle: 'Please select the article',
    selectShop: 'You should select a shop',
    state: {
      open: 'In Process',
      preform: 'Preform',
      accepted: 'Accepted',
      cancelled: 'Cancelled'
    },
    emptyArticle: 'This shop no have article. Please supply the shop'
  },
  report: {
    top5: 'Top 5 elements',
    netPrice: 'Net Sales',
    grossSale: 'Gross Sale',
    discountsSale: 'Discounts Sales',
    graphics: 'Graphic',
    barGraphics: 'Bar Graphic',
    margin: 'Margin'
  },
  sector: {
    name: 'Sector',
    agriculture: 'Agriculture/Livestock',
    food: 'Food/Gastronomy',
    architecture: 'Architecture/Construction',
    arts: 'Arts / Crafts',
    automotive: 'Automotive and parts',
    retail: 'Retail trade',
    consultancy: 'Consultancy',
    health: 'Personal care / Beauty / Health',
    education: 'Rducation',
    entertainment: 'Rntertainment',
    hotel: 'Hotel / Tourism',
    manufacture: 'Manufacture',
    ong: 'Non Governmental Organization',
    advertising: 'Advertising / Digital Media',
    accounting: 'Accounting or financial services',
    specialized: 'Specialized services',
    technologies: 'Technologies / Telecommunications',
    transport: 'Transport / Logistics',
    others: 'Others'
  },
  ...en
}

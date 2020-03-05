const LoginScreen = {

    USERNAMEFIELD: '#os-app-main > entry-layout-wrapper > entry-layout > div.entry-layout.data-grid-scroll-container.ng-star-inserted > pe-info-box > div > mat-card > mat-card-content > div > div > login-layout > entry-login > div > form > pe-form-login-fieldset > div > div > div:nth-child(1) > pe-input > div > mat-form-field > div > div.mat-form-field-flex > div > div>input',
    PASSWORDFIELD: '#os-app-main > entry-layout-wrapper > entry-layout > div.entry-layout.data-grid-scroll-container.ng-star-inserted > pe-info-box > div > mat-card > mat-card-content > div > div > login-layout > entry-login > div > form > pe-form-login-fieldset > div > div > div:nth-child(2) > pe-input-password > mat-form-field > div > div.mat-form-field-flex > div > div>input',
    LOGIN_BUTTON: '#os-app-main > entry-layout-wrapper > entry-layout > div.entry-layout.data-grid-scroll-container.ng-star-inserted > pe-info-box > div > mat-card > mat-card-content > div > div > login-layout > entry-login > div > form > button'
  
};


const DasboardUIElements = {

    DASHBOARD_APPBUTTON: '#os-app-main > os-commerce-root > platform-header-component > pe-platform-header > pe-navbar > mat-toolbar > div.mat-toolbar-area.mat-toolbar-left.ng-star-inserted > button.mat-button.mat-button-link.mat-button-bold.mobile-icons-only.desktop-text-only.ng-star-inserted > span > span',
    DASHBOARD_SHOPBUTTON:'#os-app-main > os-commerce-root > div.root-container > span > business-layout > apps-layout > div > div > app-card > div > mat-card > div:nth-child(1) > business-applications > div:nth-child(7) > div.hover-wrapper > div',
    DASHBOARD_THEMESBUTTON: '#os-app-main > os-commerce-root > platform-header-component > pe-platform-header > pe-navbar > mat-toolbar > div.mat-toolbar-area.mat-toolbar-left.ng-star-inserted > button:nth-child(3)'
};

const ShopUIElements = { 

    TEXT_LABEL:'#menus > pe-builder-navbar-top > mat-toolbar > mat-toolbar-row > pe-builder-navbar-top-button:nth-child(6) > button',
    DROPPED_TEXTLABEL:'div > div > pe-builder-elements-document > pe-builder-elements-section:nth-child(2) > pe-builder-elements-text > div',
    SHADOW_ROOT:'#content > div.canvas-container > pe-editor-canvas'
};

const THEMES_UI_ELEMENTS = {

    NEWTHEME_BUTTON:"#os-app-main > os-commerce-root > div.root-container > div > app-builder > pe-builder-themes-list > div.content-section > pe-builder-themes-list-user > div > pe-builder-theme-plus > mat-card > mat-card-content"

}

  
module.exports.LoginScreen = LoginScreen;
module.exports.DasboardUIElements = DasboardUIElements;
module.exports.ShopUIElements = ShopUIElements;
module.exports.THEMES_UI_ELEMENTS = THEMES_UI_ELEMENTS;

import { WebPage } from '@qa/taf-core';
import FooterSection from '../modules/footersection';
import BundleOfferTitle from '../modules/bundleOfferTitle';

export default class ShopMobilePage extends WebPage{
    get loginButton(){
        return this.element('xpath');
    }
    get mobileMenu(){
        return this.elementsList('xpath');
    }
    get footerSection(){
        return new FooterSection('Xpath');
    }
    get bundleSection(){
        return this.moduleList('Xpath')
    }
}
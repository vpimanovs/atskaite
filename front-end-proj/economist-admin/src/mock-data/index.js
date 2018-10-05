import { Campaign } from "model/Campaign";
import { Promotion } from 'model/Promotion';
import { OfferCategory } from "model/OfferCategory";
import { PaymentType } from 'model/PaymentType';
import { OfferTerm } from "model/OfferTerm";
import { PriceZone } from 'model/PriceZone';
import { Premia } from "model/Premia";
import { Product } from 'model/Product';
import { Offer } from "model/Offer";
export const CAMPAIGNMAP = new Map();
export const PROMOTIONMAP = new Map();
export const OFFERCATEGORYMAP = new Map();
export const PAYMENTTYPEMAP = new Map();
export const OFFERTERMMAP = new Map();
export const PRICEZONESMAP = new Map();
export const PREMIAMAP = new Map();
export const PRODUCTMAP = new Map();
export const OFFERMAP = new Map();

CAMPAIGNMAP.set('1', new Campaign({ code: '1', description: 'Campaign 1' }));
CAMPAIGNMAP.set('2', new Campaign({ code: '2', description: 'Campaign 2' }));
CAMPAIGNMAP.set('3', new Campaign({ code: '3', description: 'Campaign 3' }));
CAMPAIGNMAP.set('4', new Campaign({ code: '4', description: 'Campaign 4' }));
CAMPAIGNMAP.set('5', new Campaign({ code: '5', description: 'Campaign 5' }));

PREMIAMAP.set('1', new Premia({ code: '1', description: 'Premia 1' }));
PREMIAMAP.set('2', new Premia({ code: '2', description: 'Premia 2' }));
PREMIAMAP.set('3', new Premia({ code: '3', description: 'Premia 3' }));
PREMIAMAP.set('4', new Premia({ code: '4', description: 'Premia 4' }));
PREMIAMAP.set('5', new Premia({ code: '5', description: 'Premia 5' }));
PREMIAMAP.set('6', new Premia({ code: '6', description: 'Premia 6' }));

PRODUCTMAP.set('1', new Product({ code: '1', description: 'Product 1', id: '1' }));
PRODUCTMAP.set('2', new Product({ code: '2', description: 'Product 2', id: '2' }));
PRODUCTMAP.set('3', new Product({ code: '3', description: 'Product 3', id: '3' }));
PRODUCTMAP.set('4', new Product({ code: '4', description: 'Product 4', id: '4' }));

PROMOTIONMAP.set('1.1', new Promotion({ code: '1.1', description: "Promotion 1 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.2', new Promotion({ code: '1.2', description: "Promotion 2 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.3', new Promotion({ code: '1.3', description: "Promotion 3 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));
PROMOTIONMAP.set('1.4', new Promotion({ code: '1.4', description: "Promotion 4 for Campaign 1", campaignCode: '1', url: "https://www.wearethebest.com" }));

PROMOTIONMAP.set('2.1', new Promotion({ code: '2.1', description: "Promotion 1 for Campaign 2", campaignCode: '2', url: "https://www.bestcampaigninwholeworld.yes" }));

PROMOTIONMAP.set('3.1', new Promotion({ code: '3.1', description: "Promotion 1 for Campaign 3", campaignCode: '3', url: "https://www.bestcampaigninmylife.aha" }));

PROMOTIONMAP.set('5.1', new Promotion({ code: '5.1', description: "Promotion 1 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));
PROMOTIONMAP.set('5.2', new Promotion({ code: '5.2', description: "Promotion 2 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));
PROMOTIONMAP.set('5.3', new Promotion({ code: '5.3', description: "Promotion 3 for Campaign 5", campaignCode: '5', url: "https://www.bestcampaignonthispage.wow" }));

OFFERMAP.set('1.1.1', new Offer({ code: '1.1.1', description: "Offer 1 for Promotion 1.1", promotionCode: '1.1', priceZone: "54" }));
OFFERMAP.set('1.1.2', new Offer({ code: '1.1.2', description: "Offer 2 for Promotion 1.1", promotionCode: '1.1', priceZone: "37" }));

OFFERMAP.set('2.1.1', new Offer({ code: '2.1.1', description: "Offer 1 for Promotion 2.1", promotionCode: '2.1', priceZone: "4" }));
OFFERMAP.set('2.1.2', new Offer({ code: '2.1.2', description: "Offer 2 for Promotion 2.1", promotionCode: '2.1', priceZone: "67" }));
OFFERMAP.set('2.1.3', new Offer({ code: '2.1.3', description: "Offer 3 for Promotion 2.1", promotionCode: '2.1', priceZone: "111" }));

OFFERCATEGORYMAP.set('1', new OfferCategory({ code: '1', description: 'Category 1' }));
OFFERCATEGORYMAP.set('2', new OfferCategory({ code: '2', description: 'Category 2' }));
OFFERCATEGORYMAP.set('3', new OfferCategory({ code: '3', description: 'Category 3' }));

PAYMENTTYPEMAP.set('1', new PaymentType({ code: '1', description: 'Payment Type 1' }));
PAYMENTTYPEMAP.set('2', new PaymentType({ code: '2', description: 'Payment Type 2' }));
PAYMENTTYPEMAP.set('3', new PaymentType({ code: '3', description: 'Payment Type 3' }));
PAYMENTTYPEMAP.set('4', new PaymentType({ code: '4', description: 'Payment Type 4' }));

OFFERTERMMAP.set('1', new OfferTerm({ code: '1', description: 'Offer Term 1', duration: 1 }));
OFFERTERMMAP.set('2', new OfferTerm({ code: '2', description: 'Offer Term 2', duration: 5 }));
OFFERTERMMAP.set('3', new OfferTerm({ code: '3', description: 'Offer Term 3', duration: 10 }));
OFFERTERMMAP.set('4', new OfferTerm({ code: '4', description: 'Offer Term 4', duration: 40 }));

PRICEZONESMAP.set('2', new PriceZone({ code: '2', country: 'Åland Islands', countryCode: 'AX', currency: 'USD' }));
PRICEZONESMAP.set('3', new PriceZone({ code: '3', country: 'Albania', countryCode: 'AL', currency: 'USD' }));
PRICEZONESMAP.set('4', new PriceZone({ code: '4', country: 'Algeria', countryCode: 'DZ', currency: 'USD' }));
PRICEZONESMAP.set('5', new PriceZone({ code: '5', country: 'American Samoa', countryCode: 'AS', currency: 'USD' }));
PRICEZONESMAP.set('6', new PriceZone({ code: '6', country: 'Andorra', countryCode: 'AD', currency: 'USD' }));
PRICEZONESMAP.set('7', new PriceZone({ code: '7', country: 'Angola', countryCode: 'AO', currency: 'USD' }));
PRICEZONESMAP.set('8', new PriceZone({ code: '8', country: 'Anguilla', countryCode: 'AI', currency: 'USD' }));
PRICEZONESMAP.set('9', new PriceZone({ code: '9', country: 'Antarctica', countryCode: 'AQ', currency: 'USD' }));
PRICEZONESMAP.set('10', new PriceZone({ code: '10', country: 'Antigua and Barbuda', countryCode: 'AG', currency: 'USD' }));
PRICEZONESMAP.set('11', new PriceZone({ code: '11', country: 'Argentina', countryCode: 'AR', currency: 'USD' }));
PRICEZONESMAP.set('12', new PriceZone({ code: '12', country: 'Armenia', countryCode: 'AM', currency: 'USD' }));
PRICEZONESMAP.set('13', new PriceZone({ code: '13', country: 'Aruba', countryCode: 'AW', currency: 'USD' }));
PRICEZONESMAP.set('14', new PriceZone({ code: '14', country: 'Australia', countryCode: 'AU', currency: 'USD' }));
PRICEZONESMAP.set('15', new PriceZone({ code: '15', country: 'Austria', countryCode: 'AT', currency: 'USD' }));
PRICEZONESMAP.set('16', new PriceZone({ code: '16', country: 'Azerbaijan', countryCode: 'AZ', currency: 'USD' }));
PRICEZONESMAP.set('17', new PriceZone({ code: '17', country: 'Bahrain', countryCode: 'BH', currency: 'USD' }));
PRICEZONESMAP.set('18', new PriceZone({ code: '18', country: 'Bahamas', countryCode: 'BS', currency: 'USD' }));
PRICEZONESMAP.set('19', new PriceZone({ code: '19', country: 'Bangladesh', countryCode: 'BD', currency: 'USD' }));
PRICEZONESMAP.set('20', new PriceZone({ code: '20', country: 'Barbados', countryCode: 'BB', currency: 'USD' }));
PRICEZONESMAP.set('21', new PriceZone({ code: '21', country: 'Belarus', countryCode: 'BY', currency: 'USD' }));
PRICEZONESMAP.set('22', new PriceZone({ code: '22', country: 'Belgium', countryCode: 'BE', currency: 'USD' }));
PRICEZONESMAP.set('23', new PriceZone({ code: '23', country: 'Belize', countryCode: 'BZ', currency: 'USD' }));
PRICEZONESMAP.set('24', new PriceZone({ code: '24', country: 'Benin', countryCode: 'BJ', currency: 'USD' }));
PRICEZONESMAP.set('25', new PriceZone({ code: '25', country: 'Bermuda', countryCode: 'BM', currency: 'USD' }));
PRICEZONESMAP.set('26', new PriceZone({ code: '26', country: 'Bhutan', countryCode: 'BT', currency: 'USD' }));
PRICEZONESMAP.set('27', new PriceZone({ code: '27', country: 'Bolivia, Plurinational State of', countryCode: 'BO', currency: 'USD' }));
PRICEZONESMAP.set('28', new PriceZone({ code: '28', country: 'Bonaire, Sint Eustatius and Saba', countryCode: 'BQ', currency: 'USD' }));
PRICEZONESMAP.set('29', new PriceZone({ code: '29', country: 'Bosnia and Herzegovina', countryCode: 'BA', currency: 'USD' }));
PRICEZONESMAP.set('30', new PriceZone({ code: '30', country: 'Botswana', countryCode: 'BW', currency: 'USD' }));
PRICEZONESMAP.set('31', new PriceZone({ code: '31', country: 'Bouvet Island', countryCode: 'BV', currency: 'USD' }));
PRICEZONESMAP.set('32', new PriceZone({ code: '32', country: 'Brazil', countryCode: 'BR', currency: 'USD' }));
PRICEZONESMAP.set('33', new PriceZone({ code: '33', country: 'British Indian Ocean Territory', countryCode: 'IO', currency: 'USD' }));
PRICEZONESMAP.set('34', new PriceZone({ code: '34', country: 'Brunei Darussalam', countryCode: 'BN', currency: 'USD' }));
PRICEZONESMAP.set('35', new PriceZone({ code: '35', country: 'Bulgaria', countryCode: 'BG', currency: 'USD' }));
PRICEZONESMAP.set('36', new PriceZone({ code: '36', country: 'Burkina Faso', countryCode: 'BF', currency: 'USD' }));
PRICEZONESMAP.set('37', new PriceZone({ code: '37', country: 'Burundi', countryCode: 'BI', currency: 'USD' }));
PRICEZONESMAP.set('38', new PriceZone({ code: '38', country: 'Cambodia', countryCode: 'KH', currency: 'USD' }));
PRICEZONESMAP.set('39', new PriceZone({ code: '39', country: 'Cameroon', countryCode: 'CM', currency: 'USD' }));
PRICEZONESMAP.set('40', new PriceZone({ code: '40', country: 'Canada', countryCode: 'CA', currency: 'USD' }));
PRICEZONESMAP.set('41', new PriceZone({ code: '41', country: 'Cape Verde', countryCode: 'CV', currency: 'USD' }));
PRICEZONESMAP.set('42', new PriceZone({ code: '42', country: 'Cayman Islands', countryCode: 'KY', currency: 'USD' }));
PRICEZONESMAP.set('43', new PriceZone({ code: '43', country: 'Central African Republic', countryCode: 'CF', currency: 'USD' }));
PRICEZONESMAP.set('44', new PriceZone({ code: '44', country: 'Chad', countryCode: 'TD', currency: 'USD' }));
PRICEZONESMAP.set('45', new PriceZone({ code: '45', country: 'Chile', countryCode: 'CL', currency: 'USD' }));
PRICEZONESMAP.set('46', new PriceZone({ code: '46', country: 'China', countryCode: 'CN', currency: 'USD' }));
PRICEZONESMAP.set('47', new PriceZone({ code: '47', country: 'Christmas Island', countryCode: 'CX', currency: 'USD' }));
PRICEZONESMAP.set('48', new PriceZone({ code: '48', country: 'Cocos (Keeling) Islands', countryCode: 'CC', currency: 'USD' }));
PRICEZONESMAP.set('49', new PriceZone({ code: '49', country: 'Colombia', countryCode: 'CO', currency: 'USD' }));
PRICEZONESMAP.set('50', new PriceZone({ code: '50', country: 'Comoros', countryCode: 'KM', currency: 'USD' }));
PRICEZONESMAP.set('51', new PriceZone({ code: '51', country: 'Congo', countryCode: 'CG', currency: 'USD' }));
PRICEZONESMAP.set('52', new PriceZone({ code: '52', country: 'Congo, the Democratic Republic of the', countryCode: 'CD', currency: 'USD' }));
PRICEZONESMAP.set('53', new PriceZone({ code: '53', country: 'Cook Islands', countryCode: 'CK', currency: 'USD' }));
PRICEZONESMAP.set('54', new PriceZone({ code: '54', country: 'Costa Rica', countryCode: 'CR', currency: 'USD' }));
PRICEZONESMAP.set('55', new PriceZone({ code: '55', country: 'Côte d\'Ivoire', countryCode: 'CI', currency: 'USD' }));
PRICEZONESMAP.set('56', new PriceZone({ code: '56', country: 'Croatia', countryCode: 'HR', currency: 'USD' }));
PRICEZONESMAP.set('57', new PriceZone({ code: '57', country: 'Cuba', countryCode: 'CU', currency: 'USD' }));
PRICEZONESMAP.set('58', new PriceZone({ code: '58', country: 'Curaçao', countryCode: 'CW', currency: 'USD' }));
PRICEZONESMAP.set('59', new PriceZone({ code: '59', country: 'Cyprus', countryCode: 'CY', currency: 'USD' }));
PRICEZONESMAP.set('60', new PriceZone({ code: '60', country: 'Czech Republic', countryCode: 'CZ', currency: 'USD' }));
PRICEZONESMAP.set('61', new PriceZone({ code: '61', country: 'Denmark', countryCode: 'DK', currency: 'USD' }));
PRICEZONESMAP.set('62', new PriceZone({ code: '62', country: 'Djibouti', countryCode: 'DJ', currency: 'USD' }));
PRICEZONESMAP.set('63', new PriceZone({ code: '63', country: 'Dominica', countryCode: 'DM', currency: 'USD' }));
PRICEZONESMAP.set('64', new PriceZone({ code: '64', country: 'Dominican Republic', countryCode: 'DO', currency: 'USD' }));
PRICEZONESMAP.set('65', new PriceZone({ code: '65', country: 'Ecuador', countryCode: 'EC', currency: 'USD' }));
PRICEZONESMAP.set('66', new PriceZone({ code: '66', country: 'Egypt', countryCode: 'EG', currency: 'USD' }));
PRICEZONESMAP.set('67', new PriceZone({ code: '67', country: 'El Salvador', countryCode: 'SV', currency: 'USD' }));
PRICEZONESMAP.set('68', new PriceZone({ code: '68', country: 'Equatorial Guinea', countryCode: 'GQ', currency: 'USD' }));
PRICEZONESMAP.set('69', new PriceZone({ code: '69', country: 'Eritrea', countryCode: 'ER', currency: 'USD' }));
PRICEZONESMAP.set('70', new PriceZone({ code: '70', country: 'Estonia', countryCode: 'EE', currency: 'USD' }));
PRICEZONESMAP.set('71', new PriceZone({ code: '71', country: 'Ethiopia', countryCode: 'ET', currency: 'USD' }));
PRICEZONESMAP.set('72', new PriceZone({ code: '72', country: 'Falkland Islands (Malvinas)', countryCode: 'FK', currency: 'USD' }));
PRICEZONESMAP.set('73', new PriceZone({ code: '73', country: 'Faroe Islands', countryCode: 'FO', currency: 'USD' }));
PRICEZONESMAP.set('74', new PriceZone({ code: '74', country: 'Fiji', countryCode: 'FJ', currency: 'USD' }));
PRICEZONESMAP.set('75', new PriceZone({ code: '75', country: 'Finland', countryCode: 'FI', currency: 'USD' }));
PRICEZONESMAP.set('76', new PriceZone({ code: '76', country: 'France', countryCode: 'FR', currency: 'USD' }));
PRICEZONESMAP.set('77', new PriceZone({ code: '77', country: 'French Guiana', countryCode: 'GF', currency: 'USD' }));
PRICEZONESMAP.set('78', new PriceZone({ code: '78', country: 'French Polynesia', countryCode: 'PF', currency: 'USD' }));
PRICEZONESMAP.set('79', new PriceZone({ code: '79', country: 'French Southern Territories', countryCode: 'TF', currency: 'USD' }));
PRICEZONESMAP.set('80', new PriceZone({ code: '80', country: 'Gabon', countryCode: 'GA', currency: 'USD' }));
PRICEZONESMAP.set('81', new PriceZone({ code: '81', country: 'Gambia', countryCode: 'GM', currency: 'USD' }));
PRICEZONESMAP.set('82', new PriceZone({ code: '82', country: 'Georgia', countryCode: 'GE', currency: 'USD' }));
PRICEZONESMAP.set('83', new PriceZone({ code: '83', country: 'Germany', countryCode: 'DE', currency: 'USD' }));
PRICEZONESMAP.set('84', new PriceZone({ code: '84', country: 'Ghana', countryCode: 'GH', currency: 'USD' }));
PRICEZONESMAP.set('85', new PriceZone({ code: '85', country: 'Gibraltar', countryCode: 'GI', currency: 'USD' }));
PRICEZONESMAP.set('86', new PriceZone({ code: '86', country: 'Greece', countryCode: 'GR', currency: 'USD' }));
PRICEZONESMAP.set('87', new PriceZone({ code: '87', country: 'Greenland', countryCode: 'GL', currency: 'USD' }));
PRICEZONESMAP.set('88', new PriceZone({ code: '88', country: 'Grenada', countryCode: 'GD', currency: 'USD' }));
PRICEZONESMAP.set('89', new PriceZone({ code: '89', country: 'Guadeloupe', countryCode: 'GP', currency: 'USD' }));
PRICEZONESMAP.set('90', new PriceZone({ code: '90', country: 'Guam', countryCode: 'GU', currency: 'USD' }));
PRICEZONESMAP.set('91', new PriceZone({ code: '91', country: 'Guatemala', countryCode: 'GT', currency: 'USD' }));
PRICEZONESMAP.set('92', new PriceZone({ code: '92', country: 'Guernsey', countryCode: 'GG', currency: 'USD' }));
PRICEZONESMAP.set('93', new PriceZone({ code: '93', country: 'Guinea', countryCode: 'GN', currency: 'USD' }));
PRICEZONESMAP.set('94', new PriceZone({ code: '94', country: 'Guinea-Bissau', countryCode: 'GW', currency: 'USD' }));
PRICEZONESMAP.set('95', new PriceZone({ code: '95', country: 'Guyana', countryCode: 'GY', currency: 'USD' }));
PRICEZONESMAP.set('96', new PriceZone({ code: '96', country: 'Haiti', countryCode: 'HT', currency: 'USD' }));
PRICEZONESMAP.set('97', new PriceZone({ code: '97', country: 'Heard Island and McDonald Islands', countryCode: 'HM', currency: 'USD' }));
PRICEZONESMAP.set('98', new PriceZone({ code: '98', country: 'Holy See (Vatican City State)', countryCode: 'VA', currency: 'USD' }));
PRICEZONESMAP.set('99', new PriceZone({ code: '99', country: 'Honduras', countryCode: 'HN', currency: 'USD' }));
PRICEZONESMAP.set('100', new PriceZone({ code: '100', country: 'Hong Kong', countryCode: 'HK', currency: 'USD' }));
PRICEZONESMAP.set('101', new PriceZone({ code: '101', country: 'Hungary', countryCode: 'HU', currency: 'USD' }));
PRICEZONESMAP.set('102', new PriceZone({ code: '102', country: 'Iceland', countryCode: 'IS', currency: 'USD' }));
PRICEZONESMAP.set('103', new PriceZone({ code: '103', country: 'India', countryCode: 'IN', currency: 'USD' }));
PRICEZONESMAP.set('104', new PriceZone({ code: '104', country: 'Indonesia', countryCode: 'ID', currency: 'USD' }));
PRICEZONESMAP.set('105', new PriceZone({ code: '105', country: 'Iran, Islamic Republic of', countryCode: 'IR', currency: 'USD' }));
PRICEZONESMAP.set('106', new PriceZone({ code: '106', country: 'Iraq', countryCode: 'IQ', currency: 'USD' }));
PRICEZONESMAP.set('107', new PriceZone({ code: '107', country: 'Ireland', countryCode: 'IE', currency: 'USD' }));
PRICEZONESMAP.set('108', new PriceZone({ code: '108', country: 'Isle of Man', countryCode: 'IM', currency: 'USD' }));
PRICEZONESMAP.set('109', new PriceZone({ code: '109', country: 'Israel', countryCode: 'IL', currency: 'USD' }));
PRICEZONESMAP.set('110', new PriceZone({ code: '110', country: 'Italy', countryCode: 'IT', currency: 'USD' }));
PRICEZONESMAP.set('111', new PriceZone({ code: '111', country: 'Jamaica', countryCode: 'JM', currency: 'USD' }));
PRICEZONESMAP.set('112', new PriceZone({ code: '112', country: 'Japan', countryCode: 'JP', currency: 'USD' }));
PRICEZONESMAP.set('113', new PriceZone({ code: '113', country: 'Jersey', countryCode: 'JE', currency: 'USD' }));
PRICEZONESMAP.set('114', new PriceZone({ code: '114', country: 'Jordan', countryCode: 'JO', currency: 'USD' }));
PRICEZONESMAP.set('115', new PriceZone({ code: '115', country: 'Kazakhstan', countryCode: 'KZ', currency: 'USD' }));
PRICEZONESMAP.set('116', new PriceZone({ code: '116', country: 'Kenya', countryCode: 'KE', currency: 'USD' }));
PRICEZONESMAP.set('117', new PriceZone({ code: '117', country: 'Kiribati', countryCode: 'KI', currency: 'USD' }));
PRICEZONESMAP.set('118', new PriceZone({ code: '118', country: 'Korea, Democratic People\'s Republic of', countryCode: 'KP', currency: 'USD' }));
PRICEZONESMAP.set('119', new PriceZone({ code: '119', country: 'Korea, Republic of', countryCode: 'KR', currency: 'USD' }));
PRICEZONESMAP.set('120', new PriceZone({ code: '120', country: 'Kuwait', countryCode: 'KW', currency: 'USD' }));
PRICEZONESMAP.set('121', new PriceZone({ code: '121', country: 'Kyrgyzstan', countryCode: 'KG', currency: 'USD' }));
PRICEZONESMAP.set('122', new PriceZone({ code: '122', country: 'Lao People\'s Democratic Republic', countryCode: 'LA', currency: 'USD' }));
PRICEZONESMAP.set('123', new PriceZone({ code: '123', country: 'Latvia', countryCode: 'LV', currency: 'USD' }));
PRICEZONESMAP.set('124', new PriceZone({ code: '124', country: 'Lebanon', countryCode: 'LB', currency: 'USD' }));
PRICEZONESMAP.set('125', new PriceZone({ code: '125', country: 'Lesotho', countryCode: 'LS', currency: 'USD' }));
PRICEZONESMAP.set('126', new PriceZone({ code: '126', country: 'Liberia', countryCode: 'LR', currency: 'USD' }));
PRICEZONESMAP.set('127', new PriceZone({ code: '127', country: 'Libya', countryCode: 'LY', currency: 'USD' }));
PRICEZONESMAP.set('128', new PriceZone({ code: '128', country: 'Liechtenstein', countryCode: 'LI', currency: 'USD' }));
PRICEZONESMAP.set('129', new PriceZone({ code: '129', country: 'Lithuania', countryCode: 'LT', currency: 'USD' }));
PRICEZONESMAP.set('130', new PriceZone({ code: '130', country: 'Luxembourg', countryCode: 'LU', currency: 'USD' }));
PRICEZONESMAP.set('131', new PriceZone({ code: '131', country: 'Macao', countryCode: 'MO', currency: 'USD' }));
PRICEZONESMAP.set('132', new PriceZone({ code: '132', country: 'Macedonia, the Former Yugoslav Republic of', countryCode: 'MK', currency: 'USD' }));
PRICEZONESMAP.set('133', new PriceZone({ code: '133', country: 'Madagascar', countryCode: 'MG', currency: 'USD' }));
PRICEZONESMAP.set('134', new PriceZone({ code: '134', country: 'Malawi', countryCode: 'MW', currency: 'USD' }));
PRICEZONESMAP.set('135', new PriceZone({ code: '135', country: 'Malaysia', countryCode: 'MY', currency: 'USD' }));
PRICEZONESMAP.set('136', new PriceZone({ code: '136', country: 'Maldives', countryCode: 'MV', currency: 'USD' }));
PRICEZONESMAP.set('137', new PriceZone({ code: '137', country: 'Mali', countryCode: 'ML', currency: 'USD' }));
PRICEZONESMAP.set('138', new PriceZone({ code: '138', country: 'Malta', countryCode: 'MT', currency: 'USD' }));
PRICEZONESMAP.set('139', new PriceZone({ code: '139', country: 'Marshall Islands', countryCode: 'MH', currency: 'USD' }));
PRICEZONESMAP.set('140', new PriceZone({ code: '140', country: 'Martinique', countryCode: 'MQ', currency: 'USD' }));
PRICEZONESMAP.set('141', new PriceZone({ code: '141', country: 'Mauritania', countryCode: 'MR', currency: 'USD' }));
PRICEZONESMAP.set('142', new PriceZone({ code: '142', country: 'Mauritius', countryCode: 'MU', currency: 'USD' }));
PRICEZONESMAP.set('143', new PriceZone({ code: '143', country: 'Mayotte', countryCode: 'YT', currency: 'USD' }));
PRICEZONESMAP.set('144', new PriceZone({ code: '144', country: 'Mexico', countryCode: 'MX', currency: 'USD' }));
PRICEZONESMAP.set('145', new PriceZone({ code: '145', country: 'Micronesia, Federated States of', countryCode: 'FM', currency: 'USD' }));
PRICEZONESMAP.set('146', new PriceZone({ code: '146', country: 'Moldova, Republic of', countryCode: 'MD', currency: 'USD' }));
PRICEZONESMAP.set('147', new PriceZone({ code: '147', country: 'Monaco', countryCode: 'MC', currency: 'USD' }));
PRICEZONESMAP.set('148', new PriceZone({ code: '148', country: 'Mongolia', countryCode: 'MN', currency: 'USD' }));
PRICEZONESMAP.set('149', new PriceZone({ code: '149', country: 'Montenegro', countryCode: 'ME', currency: 'USD' }));
PRICEZONESMAP.set('150', new PriceZone({ code: '150', country: 'Montserrat', countryCode: 'MS', currency: 'USD' }));
PRICEZONESMAP.set('151', new PriceZone({ code: '151', country: 'Morocco', countryCode: 'MA', currency: 'USD' }));
PRICEZONESMAP.set('152', new PriceZone({ code: '152', country: 'Mozambique', countryCode: 'MZ', currency: 'USD' }));
PRICEZONESMAP.set('153', new PriceZone({ code: '153', country: 'Myanmar', countryCode: 'MM', currency: 'USD' }));
PRICEZONESMAP.set('154', new PriceZone({ code: '154', country: 'Namibia', countryCode: 'NA', currency: 'USD' }));
PRICEZONESMAP.set('155', new PriceZone({ code: '155', country: 'Nauru', countryCode: 'NR', currency: 'USD' }));
PRICEZONESMAP.set('156', new PriceZone({ code: '156', country: 'Nepal', countryCode: 'NP', currency: 'USD' }));
PRICEZONESMAP.set('157', new PriceZone({ code: '157', country: 'Netherlands', countryCode: 'NL', currency: 'USD' }));
PRICEZONESMAP.set('158', new PriceZone({ code: '158', country: 'New Caledonia', countryCode: 'NC', currency: 'USD' }));
PRICEZONESMAP.set('159', new PriceZone({ code: '159', country: 'New Zealand', countryCode: 'NZ', currency: 'USD' }));
PRICEZONESMAP.set('160', new PriceZone({ code: '160', country: 'Nicaragua', countryCode: 'NI', currency: 'USD' }));
PRICEZONESMAP.set('161', new PriceZone({ code: '161', country: 'Niger', countryCode: 'NE', currency: 'USD' }));
PRICEZONESMAP.set('162', new PriceZone({ code: '162', country: 'Nigeria', countryCode: 'NG', currency: 'USD' }));
PRICEZONESMAP.set('163', new PriceZone({ code: '163', country: 'Niue', countryCode: 'NU', currency: 'USD' }));
PRICEZONESMAP.set('164', new PriceZone({ code: '164', country: 'Norfolk Island', countryCode: 'NF', currency: 'USD' }));
PRICEZONESMAP.set('165', new PriceZone({ code: '165', country: 'Northern Mariana Islands', countryCode: 'MP', currency: 'USD' }));
PRICEZONESMAP.set('166', new PriceZone({ code: '166', country: 'Norway', countryCode: 'NO', currency: 'USD' }));
PRICEZONESMAP.set('167', new PriceZone({ code: '167', country: 'Oman', countryCode: 'OM', currency: 'USD' }));
PRICEZONESMAP.set('168', new PriceZone({ code: '168', country: 'Pakistan', countryCode: 'PK', currency: 'USD' }));
PRICEZONESMAP.set('169', new PriceZone({ code: '169', country: 'Palau', countryCode: 'PW', currency: 'USD' }));
PRICEZONESMAP.set('170', new PriceZone({ code: '170', country: 'Palestine, State of', countryCode: 'PS', currency: 'USD' }));
PRICEZONESMAP.set('171', new PriceZone({ code: '171', country: 'Panama', countryCode: 'PA', currency: 'USD' }));
PRICEZONESMAP.set('172', new PriceZone({ code: '172', country: 'Papua New Guinea', countryCode: 'PG', currency: 'USD' }));
PRICEZONESMAP.set('173', new PriceZone({ code: '173', country: 'Paraguay', countryCode: 'PY', currency: 'USD' }));
PRICEZONESMAP.set('174', new PriceZone({ code: '174', country: 'Peru', countryCode: 'PE', currency: 'USD' }));
PRICEZONESMAP.set('175', new PriceZone({ code: '175', country: 'Philippines', countryCode: 'PH', currency: 'USD' }));
PRICEZONESMAP.set('176', new PriceZone({ code: '176', country: 'Pitcairn', countryCode: 'PN', currency: 'USD' }));
PRICEZONESMAP.set('177', new PriceZone({ code: '177', country: 'Poland', countryCode: 'PL', currency: 'USD' }));
PRICEZONESMAP.set('178', new PriceZone({ code: '178', country: 'Portugal', countryCode: 'PT', currency: 'USD' }));
PRICEZONESMAP.set('179', new PriceZone({ code: '179', country: 'Puerto Rico', countryCode: 'PR', currency: 'USD' }));
PRICEZONESMAP.set('180', new PriceZone({ code: '180', country: 'Qatar', countryCode: 'QA', currency: 'USD' }));
PRICEZONESMAP.set('181', new PriceZone({ code: '181', country: 'Réunion', countryCode: 'RE', currency: 'USD' }));
PRICEZONESMAP.set('182', new PriceZone({ code: '182', country: 'Romania', countryCode: 'RO', currency: 'USD' }));
PRICEZONESMAP.set('183', new PriceZone({ code: '183', country: 'Russian Federation', countryCode: 'RU', currency: 'USD' }));
PRICEZONESMAP.set('184', new PriceZone({ code: '184', country: 'Rwanda', countryCode: 'RW', currency: 'USD' }));
PRICEZONESMAP.set('185', new PriceZone({ code: '185', country: 'Saint Barthélemy', countryCode: 'BL', currency: 'USD' }));
PRICEZONESMAP.set('186', new PriceZone({ code: '186', country: 'Saint Helena, Ascension and Tristan da Cunha', countryCode: 'SH', currency: 'USD' }));
PRICEZONESMAP.set('187', new PriceZone({ code: '187', country: 'Saint Kitts and Nevis', countryCode: 'KN', currency: 'USD' }));
PRICEZONESMAP.set('188', new PriceZone({ code: '188', country: 'Saint Lucia', countryCode: 'LC', currency: 'USD' }));
PRICEZONESMAP.set('189', new PriceZone({ code: '189', country: 'Saint Martin (French part)', countryCode: 'MF', currency: 'USD' }));
PRICEZONESMAP.set('190', new PriceZone({ code: '190', country: 'Saint Pierre and Miquelon', countryCode: 'PM', currency: 'USD' }));
PRICEZONESMAP.set('191', new PriceZone({ code: '191', country: 'Saint Vincent and the Grenadines', countryCode: 'VC', currency: 'USD' }));
PRICEZONESMAP.set('192', new PriceZone({ code: '192', country: 'Samoa', countryCode: 'WS', currency: 'USD' }));
PRICEZONESMAP.set('193', new PriceZone({ code: '193', country: 'San Marino', countryCode: 'SM', currency: 'USD' }));
PRICEZONESMAP.set('194', new PriceZone({ code: '194', country: 'Sao Tome and Principe', countryCode: 'ST', currency: 'USD' }));
PRICEZONESMAP.set('195', new PriceZone({ code: '195', country: 'Saudi Arabia', countryCode: 'SA', currency: 'USD' }));
PRICEZONESMAP.set('196', new PriceZone({ code: '196', country: 'Senegal', countryCode: 'SN', currency: 'USD' }));
PRICEZONESMAP.set('197', new PriceZone({ code: '197', country: 'Serbia', countryCode: 'RS', currency: 'USD' }));
PRICEZONESMAP.set('198', new PriceZone({ code: '198', country: 'Seychelles', countryCode: 'SC', currency: 'USD' }));
PRICEZONESMAP.set('199', new PriceZone({ code: '199', country: 'Sierra Leone', countryCode: 'SL', currency: 'USD' }));
PRICEZONESMAP.set('200', new PriceZone({ code: '200', country: 'Singapore', countryCode: 'SG', currency: 'USD' }));
PRICEZONESMAP.set('201', new PriceZone({ code: '201', country: 'Sint Maarten (Dutch part)', countryCode: 'SX', currency: 'USD' }));
PRICEZONESMAP.set('202', new PriceZone({ code: '202', country: 'Slovakia', countryCode: 'SK', currency: 'USD' }));
PRICEZONESMAP.set('203', new PriceZone({ code: '203', country: 'Slovenia', countryCode: 'SI', currency: 'USD' }));
PRICEZONESMAP.set('204', new PriceZone({ code: '204', country: 'Solomon Islands', countryCode: 'SB', currency: 'USD' }));
PRICEZONESMAP.set('205', new PriceZone({ code: '205', country: 'Somalia', countryCode: 'SO', currency: 'USD' }));
PRICEZONESMAP.set('206', new PriceZone({ code: '206', country: 'South Africa', countryCode: 'ZA', currency: 'USD' }));
PRICEZONESMAP.set('207', new PriceZone({ code: '207', country: 'South Georgia and the South Sandwich Islands', countryCode: 'GS', currency: 'USD' }));
PRICEZONESMAP.set('208', new PriceZone({ code: '208', country: 'South Sudan', countryCode: 'SS', currency: 'USD' }));
PRICEZONESMAP.set('209', new PriceZone({ code: '209', country: 'Spain', countryCode: 'ES', currency: 'USD' }));
PRICEZONESMAP.set('210', new PriceZone({ code: '210', country: 'Sri Lanka', countryCode: 'LK', currency: 'USD' }));
PRICEZONESMAP.set('211', new PriceZone({ code: '211', country: 'Sudan', countryCode: 'SD', currency: 'USD' }));
PRICEZONESMAP.set('212', new PriceZone({ code: '212', country: 'Suriname', countryCode: 'SR', currency: 'USD' }));
PRICEZONESMAP.set('213', new PriceZone({ code: '213', country: 'Svalbard and Jan Mayen', countryCode: 'SJ', currency: 'USD' }));
PRICEZONESMAP.set('214', new PriceZone({ code: '214', country: 'Swaziland', countryCode: 'SZ', currency: 'USD' }));
PRICEZONESMAP.set('215', new PriceZone({ code: '215', country: 'Sweden', countryCode: 'SE', currency: 'USD' }));
PRICEZONESMAP.set('216', new PriceZone({ code: '216', country: 'Switzerland', countryCode: 'CH', currency: 'USD' }));
PRICEZONESMAP.set('217', new PriceZone({ code: '217', country: 'Syrian Arab Republic', countryCode: 'SY', currency: 'USD' }));
PRICEZONESMAP.set('218', new PriceZone({ code: '218', country: 'Taiwan, Province of China', countryCode: 'TW', currency: 'USD' }));
PRICEZONESMAP.set('219', new PriceZone({ code: '219', country: 'Tajikistan', countryCode: 'TJ', currency: 'USD' }));
PRICEZONESMAP.set('220', new PriceZone({ code: '220', country: 'Tanzania, United Republic of', countryCode: 'TZ', currency: 'USD' }));
PRICEZONESMAP.set('221', new PriceZone({ code: '221', country: 'Thailand', countryCode: 'TH', currency: 'USD' }));
PRICEZONESMAP.set('222', new PriceZone({ code: '222', country: 'Timor-Leste', countryCode: 'TL', currency: 'USD' }));
PRICEZONESMAP.set('223', new PriceZone({ code: '223', country: 'Togo', countryCode: 'TG', currency: 'USD' }));
PRICEZONESMAP.set('224', new PriceZone({ code: '224', country: 'Tokelau', countryCode: 'TK', currency: 'USD' }));
PRICEZONESMAP.set('225', new PriceZone({ code: '225', country: 'Tonga', countryCode: 'TO', currency: 'USD' }));
PRICEZONESMAP.set('226', new PriceZone({ code: '226', country: 'Trinidad and Tobago', countryCode: 'TT', currency: 'USD' }));
PRICEZONESMAP.set('227', new PriceZone({ code: '227', country: 'Tunisia', countryCode: 'TN', currency: 'USD' }));
PRICEZONESMAP.set('228', new PriceZone({ code: '228', country: 'Turkey', countryCode: 'TR', currency: 'USD' }));
PRICEZONESMAP.set('229', new PriceZone({ code: '229', country: 'Turkmenistan', countryCode: 'TM', currency: 'USD' }));
PRICEZONESMAP.set('230', new PriceZone({ code: '230', country: 'Turks and Caicos Islands', countryCode: 'TC', currency: 'USD' }));
PRICEZONESMAP.set('231', new PriceZone({ code: '231', country: 'Tuvalu', countryCode: 'TV', currency: 'USD' }));
PRICEZONESMAP.set('232', new PriceZone({ code: '232', country: 'Uganda', countryCode: 'UG', currency: 'USD' }));
PRICEZONESMAP.set('233', new PriceZone({ code: '233', country: 'Ukraine', countryCode: 'UA', currency: 'USD' }));
PRICEZONESMAP.set('234', new PriceZone({ code: '234', country: 'United Arab Emirates', countryCode: 'AE', currency: 'USD' }));
PRICEZONESMAP.set('235', new PriceZone({ code: '235', country: 'United Kingdom', countryCode: 'GB', currency: 'USD' }));
PRICEZONESMAP.set('236', new PriceZone({ code: '236', country: 'United States', countryCode: 'US', currency: 'USD' }));
PRICEZONESMAP.set('237', new PriceZone({ code: '237', country: 'United States Minor Outlying Islands', countryCode: 'UM', currency: 'USD' }));
PRICEZONESMAP.set('238', new PriceZone({ code: '238', country: 'Uruguay', countryCode: 'UY', currency: 'USD' }));
PRICEZONESMAP.set('239', new PriceZone({ code: '239', country: 'Uzbekistan', countryCode: 'UZ', currency: 'USD' }));
PRICEZONESMAP.set('240', new PriceZone({ code: '240', country: 'Vanuatu', countryCode: 'VU', currency: 'USD' }));
PRICEZONESMAP.set('241', new PriceZone({ code: '241', country: 'Venezuela, Bolivarian Republic of', countryCode: 'VE', currency: 'USD' }));
PRICEZONESMAP.set('242', new PriceZone({ code: '242', country: 'Viet Nam', countryCode: 'VN', currency: 'USD' }));
PRICEZONESMAP.set('243', new PriceZone({ code: '243', country: 'Virgin Islands, British', countryCode: 'VG', currency: 'USD' }));
PRICEZONESMAP.set('244', new PriceZone({ code: '244', country: 'Virgin Islands, U.S.', countryCode: 'VI', currency: 'USD' }));
PRICEZONESMAP.set('245', new PriceZone({ code: '245', country: 'Wallis and Futuna', countryCode: 'WF', currency: 'USD' }));
PRICEZONESMAP.set('246', new PriceZone({ code: '246', country: 'Western Sahara', countryCode: 'EH', currency: 'USD' }));
PRICEZONESMAP.set('247', new PriceZone({ code: '247', country: 'Yemen', countryCode: 'YE', currency: 'USD' }));
PRICEZONESMAP.set('248', new PriceZone({ code: '248', country: 'Zambia', countryCode: 'ZM', currency: 'USD' }));
PRICEZONESMAP.set('249', new PriceZone({ code: '249', country: 'Zimbabwe', countryCode: 'ZW', currency: 'USD' }));

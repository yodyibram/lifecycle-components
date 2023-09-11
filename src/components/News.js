import React, { Component } from 'react';
import NewsUpdate from './NewsUpdate';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
            "title": "Here's a phone you should get your kid instead of the iPhone",
            "description": "Looking to buy a phone for your kid as they head back to school? Your choices don't have to be limited to an iPhone — you should instead take a look at the Pixel 7a.",
            "url": "https://www.androidcentral.com/phones/heres-a-phone-you-should-get-your-kid-instead-of-the-iphone",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZzEgg4HBRSuj3M4MAWZwnR-1200-80.jpg",
            "publishedAt": "2023-09-06T08:32:28Z",
            "content": "A recent survey found that an overwhelming 87% of teens in the U.S. used an iPhone. That's an astonishing figure, and it basically means that nine out of 10 teens use an iPhone. So if you're thinking… [+4563 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Apple Signs New Deal With Arm to License Chip Designs Beyond 2040",
            "description": "Apple has signed a new deal with British chip design company Arm to license its chip technology that extends beyond 2040, reports Reuters.\n\n\n\n\n\nNews of the deal emerged in documents filed on Tuesday for Arm's initial public offering, which the company has pri…",
            "url": "https://www.macrumors.com/2023/09/06/apple-inks-new-deal-arm-chip-designer/",
            "urlToImage": "https://images.macrumors.com/t/VZVrnpt0fruX5wCWAbd8R_GXdE8=/1600x/article-new/2021/02/arm-logo-blue-bg.jpg",
            "publishedAt": "2023-09-06T07:49:06Z",
            "content": "Apple has signed a new deal with British chip design company Arm to license its chip technology that extends beyond 2040, reports Reuters.\r\nNews of the deal emerged in documents filed on Tuesday for … [+1535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "USB-C iPhone 15 May Tempt Some Android Owners to Switch, Survey Suggests",
            "description": "The iPhone 15's expected move to USB-C this year may motivate a large number of Android users to switch phones, according to a survey conducted by SellCell.\n\n\n\n\n\nSellCell asked over 1,000 iPhone users and over 1,000 Android users in the United States to gathe…",
            "url": "https://www.macrumors.com/2023/09/06/usb-c-iphone-tempts-android-users-to-switch/",
            "urlToImage": "https://images.macrumors.com/t/xSUX5znUC2RS5cSJ8kKUz-qkX6E=/2500x/article-new/2023/05/Apple-Prefer-USB-C-Lightning-Feature-Remake.jpg",
            "publishedAt": "2023-09-06T10:45:55Z",
            "content": "The iPhone 15's expected move to USB-C this year may motivate a large number of Android users to switch phones, according to a survey conducted by SellCell.\r\nSellCell asked over 1,000 iPhone users an… [+1968 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Huileng Tan",
            "title": "China is now ordering government officials not to use iPhones for work, amid a Washington and Beijing tech war: WSJ",
            "description": "The ban could have a significant impact on Apple as China is its largest market, accounting for nearly 20% of the tech giant's overall revenue.",
            "url": "https://www.businessinsider.com/china-apple-iphone-tech-ban-central-government-officials-2023-9",
            "urlToImage": "https://i.insider.com/64f8290b04e14000196c9207?width=1200&format=jpeg",
            "publishedAt": "2023-09-06T07:43:05Z",
            "content": "China is now ordering government officials not to use iPhones for work.Cang Hai/CFOTO/Future Publishing/Getty Images\r\n<ul>\n<li>China has banned central government staff from using Apple's iPhones at … [+1410 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Hannah Getahun",
            "title": "A teen who lost his $12,000 bike while flying from Europe found it in an airport with an AirTag, but said neither United nor Brussels Airlines would help him retrieve it",
            "description": "Luke Barnett and his son Gray, a cyclist with the EF Pro Cycling team's junior development program, spoke to CNN about how they retrieved his $12,000 bike.",
            "url": "https://www.businessinsider.com/teen-finds-bike-using-apple-airtag-2023-9",
            "urlToImage": "https://i.insider.com/64dc0f314ef9f30019f7ad9a?width=1200&format=jpeg",
            "publishedAt": "2023-09-06T03:59:46Z",
            "content": "Thierry Monasse/Getty Images\r\n<ul><li>A 16-year-old cyclist located his bike using an Apple AirTag. </li><li>However, his father said they became distressed after trying to get the airlines to return… [+2176 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Apple brinda su futuro tras cerrar un acuerdo con Arm de larga duración",
            "description": "Apple ha firmado un nuevo acuerdo con Arm, empresa de semiconductores británica, para poder usar la tecnología de chips en sus procesadores “más allá de 2024”, ha revelado Reuters a través de información obtenida mediante informes que la propia compañía ha fa…",
            "url": "http://hipertextual.com/2023/09/apple-brinda-su-futuro-tras-cerrar-un-acuerdo-con-arm-de-larga-duracion",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2022/02/ARM-Chip-scaled.jpg",
            "publishedAt": "2023-09-06T07:46:50Z",
            "content": "Apple ha firmado un nuevo acuerdo con Arm, empresa de semiconductores británica, para poder usar la tecnología de chips en sus procesadores más allá de 2024, ha revelado Reuters a través de informaci… [+2170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Hipertextual (Redacción)",
            "title": "Disney+ por 1,99: aprovecha este descuentazo del 75% por tiempo limitado",
            "description": "Disney celebra la llegada de nuevos estrenos a la plataforma con una oferta imperdible que no puedes dejar pasar. Ahora puedes darte de alta en Disney+ con un 75% de descuento en la suscripción mensual. Sí, has leído bien. Un superdescuento que deja el precio…",
            "url": "http://hipertextual.com/2023/09/ferta-de-disney-descuento-2023",
            "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/05/disney-plus-logo_1.jpg",
            "publishedAt": "2023-09-06T08:04:45Z",
            "content": "Disney celebra la llegada de nuevos estrenos a la plataforma con una oferta imperdible que no puedes dejar pasar. Ahora puedes darte de alta en Disney+ con un 75% de descuento en la suscripción mensu… [+4145 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Walter Isaacson",
            "title": "Inside Elon Musk’s Struggle for the Future of AI",
            "description": "'I can't just sit around and do nothing.' An exclusive excerpt from Walter Isaacson's new Elon Musk biography.",
            "url": "https://time.com/6310076/elon-musk-ai-walter-isaacson-biography/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/08/elon-musk-ai-isaacson-01.jpg?quality=85",
            "publishedAt": "2023-09-06T11:00:00Z",
            "content": "At a conference in 2012, Elon Musk met Demis Hassabis, the video-game designer and artificial--intelligence researcher who had co-founded a company named DeepMind that sought to design computers that… [+16017 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "AP",
            "title": "Airbnb Limits Some New Reservations In NYC As Short-Term Rental Regulations Take Effect",
            "description": "New regulations on short-term rentals have gone into effect in New York City.",
            "url": "https://www.huffpost.com/entry/airbnb-new-york-city-rental-regulations_n_64f7eba9e4b08f6e30e9e8b9",
            "urlToImage": "https://img.huffingtonpost.com/asset/64f7ebad2400003200b0247e.jpeg?cache=ROoP5VTzLV&ops=1200_630",
            "publishedAt": "2023-09-06T03:07:03Z",
            "content": "NEW YORK (AP) Home-sharing giant Airbnb said it has had to stop accepting some reservations in New York City as new regulations on short-term rentals went into effect Tuesday that will mean big chang… [+3936 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Juan Carlos López",
            "title": "Apple acaba de blindar el futuro de sus chips firmando un acuerdo con Arm que perdurará más allá de 2040",
            "description": "Apple Silicon, la división de la compañía liderada por Tim Cook que se responsabiliza del diseño de sus chips, está dando muchas alegrías a los de Cupertino. La familia de procesadores M1 primero y M2 después nos han demostrado que son muy competitivas si nos…",
            "url": "https://www.xataka.com/empresas-y-economia/apple-acaba-blindar-futuro-sus-chips-firmando-acuerdo-arm-que-perdurara-alla-2040",
            "urlToImage": "https://i.blogs.es/ac0072/applesilicon-ap/840_560.jpeg",
            "publishedAt": "2023-09-06T09:35:00Z",
            "content": "Apple Silicon, la división de la compañía liderada por Tim Cook que se responsabiliza del diseño de sus chips, está dando muchas alegrías a los de Cupertino. La familia de procesadores M1 primero y M… [+3224 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Lacort",
            "title": "Los AirPods falsos son un problema cada vez mayor: cuesta mucho distinguirlos de los auténticos... pero tenemos algunos consejos",
            "description": "No ocupan portadas, no reciben reviews en Xataka, muy poca gente presume de comprarlos. Están ahí, se mueven entre nosotros, pero como un elefante en la habitación, casi nadie quiere hablar de los AirPods falsificados. Por no incomodar a quien hemos detectado…",
            "url": "https://www.xataka.com/audio/airpods-falsos-problema-cada-vez-mayor-cuesta-mucho-distinguirlos-autenticos-tenemos-algunos-consejos",
            "urlToImage": "https://i.blogs.es/c9a647/03-miguel-dest/840_560.jpeg",
            "publishedAt": "2023-09-06T10:01:41Z",
            "content": "No ocupan portadas, no reciben reviews en Xataka, muy poca gente presume de comprarlos. Están ahí, se mueven entre nosotros, pero como un elefante en la habitación, casi nadie quiere hablar de los Ai… [+11269 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Enrique Pérez",
            "title": "Didier Reynders, el caballero belga que tiene el reto de sustituir a Vestager frente a las grandes tecnológicas",
            "description": "Plantar cara a las 'Big Tech' no es tarea fácil. Margrethe Vestager, quien ha sido Comisaria de Competencia de la Unión Europea durante la última década ha decidido centrarse en su candidatura a presidir el Banco Europeo de Inversiones. Un paso al lado donde …",
            "url": "https://www.xataka.com/legislacion-y-derechos/didier-reynders-caballero-belga-que-tiene-reto-sustituir-a-vestager-frente-a-grandes-tecnologicas",
            "urlToImage": "https://i.blogs.es/350561/didier-reynders/840_560.jpeg",
            "publishedAt": "2023-09-06T08:30:43Z",
            "content": "Plantar cara a las 'Big Tech' no es tarea fácil. Margrethe Vestager, quien ha sido Comisaria de Competencia de la Unión Europea durante la última década ha decidido centrarse en su candidatura a pres… [+3269 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrospaces.net"
            },
            "author": "P/K",
            "title": "On the 10th anniversary of the Snowden revelations",
            "description": "A weblog about Signals Intelligence, Communications Security and top level telecommunications equipment",
            "url": "https://www.electrospaces.net/2023/06/on-10th-anniversary-of-snowden.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyhZ8oMTZBwed-5n7dMj4FYGxNBxrR8NfDPbzx9Te6eeni5ePQDuNKSVPKfGm1TYMJTToHO19ZFzFVvLPJrgJ_yXPPbT06cJrAE7Nr2F5B_NoWy7aHGgdxlD6xqDPf4yy19JIbBk2TfBVZPPoiojdk039bRHMtNCmkzUuznUDeE24c_tEwqEhFaFH7/w1200-h630-p-k-no-nu/10yearsnowden-header.jpg",
            "publishedAt": "2023-09-06T01:57:58Z",
            "content": "To mark the 10-year anniversary of the start of the Snowden revelations I will look back at some of the most notable disclosures and how they developed, based upon the most recent books and the numer… [+28884 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Mark Zimmermann",
            "title": "heise+ | iOS 17 & Co: Was Apples neue Systeme für Unternehmen bringen",
            "description": "Verbesserungen beim Business Manager, der Apple-ID-Verwaltung sowie MDM-Support für die Apple Watch gehören zu den größten Neuerungen. Ein Praxis-Überblick.",
            "url": "https://www.heise.de/ratgeber/iOS-17-Co-Was-Apples-neue-Systeme-fuer-Unternehmen-bringen-9291084.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/5/2/0/8/mi_0523_finetuning_aufmacher_buero_2-d515e1e6d0f7678b.jpg",
            "publishedAt": "2023-09-06T07:30:00Z",
            "content": "Inhaltsverzeichnis\r\nDank der System-Updates lassen sich mobile Apple-Geräte in Organisationen leichter verwalten und versprechen ein angenehmeres Nutzererlebnis für die Mitarbeiter. Die Neuerungen in… [+1415 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "Bericht: Apple-Watch-Armbänder bald alle vegan, Ende der Kooperation mit Hermès?",
            "description": "Neben den iPhone-Hüllen plant Apple offenbar auch bei Apple-Watch-Armbändern eine Umstellung auf ein tierfreies Material. Das könnte eine Kooperation tangieren.",
            "url": "https://www.heise.de/news/Bericht-Apple-Watch-Armbaender-bald-alle-vegan-Ende-der-Kooperation-mit-Hermes-9296047.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/7/8/7/0/hermes_band-afe885691301b146.png",
            "publishedAt": "2023-09-06T07:59:00Z",
            "content": "Apple plant offenbar nicht nur einen größeren Nachhaltigkeitsumbau bei seinen Hüllen für das iPhone 15, sondern auch bei den populären Armbändern seiner Apple Watch. Wie Bloomberg-Journalist Mark Gur… [+2035 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Falk Steiner",
            "title": "DMA: Gatekeeper sind Alphabet, Amazon, Apple, Bytedance, Meta und Microsoft",
            "description": "Der Digital Markets Act soll Menschen in Europa mehr Auswahl geben. Nun ist klar, für welche Plattformen die Regeln gelten. Sechs Konzerne haben sechs Monate.",
            "url": "https://www.heise.de/news/Digital-Markets-Act-WhatsApp-und-Facebook-Messenger-muessen-interoperabel-werden-9296190.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/7/9/4/8/shutterstock_1009504162-5368c49d8f7b5ade.jpg",
            "publishedAt": "2023-09-06T10:07:00Z",
            "content": "Inhaltsverzeichnis\r\nAlphabet, Amazon, Apple, ByteDance, Meta und Microsoft fallen als sogenannte \"Torwächter\" unter die Regelungen des Digital Markets Acts der Europäischen Union. Das hat die EU-Komm… [+6154 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Ben Schwan",
            "title": "iPad: War ein 14-Zoll-Modell geplant?",
            "description": "Aktuell ist bei Apples Tablets mit 12,9 Zoll Schluss. Erst kürzlich war einem Bericht zufolge noch geplant, das iPad zu vergrößern.",
            "url": "https://www.heise.de/news/iPad-War-ein-14-Zoll-Modell-geplant-9294876.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/7/2/3/9/ipadpro2022-4d02e535d6634380.png",
            "publishedAt": "2023-09-06T07:18:00Z",
            "content": "Apple soll kurz vor der Produktion seines bislang größten iPads gestanden haben aber das Projekt wurde zunächst zurückgestellt. Das berichtet die Finanznachrichtenagentur Bloomberg unter Berufung auf… [+2068 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Mark Mantel",
            "title": "Cinebench 2024: Render-Benchmark vergleicht jetzt auch wieder Grafikkarten",
            "description": "Der Cinebench bekommt einen neuen technischen Unterbau. Die Version 2024 nutzt die Redshift-Engine, die auch auf GPUs läuft.",
            "url": "https://www.heise.de/news/Cinebench-2024-Render-Benchmark-vergleicht-jetzt-auch-wieder-Grafikkarten-9296281.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/9/7/9/9/4/CB2024_MGPU-8d22da5047d015e1.png",
            "publishedAt": "2023-09-06T08:59:00Z",
            "content": "Der Software-Entwickler Maxon hat den Cinebench 2024 veröffentlicht. Der Render-Benchmark erscheint knapp drei Jahre nach dem Cinebench R23 die R-Bezeichnungen gibt die Firma jetzt auf. Neben Prozess… [+2034 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple Card offering up to $200 Daily Cash to promote ‘Family’ feature",
            "description": "Apple Card users can now take advantage of a time-limited promotion that lets them earn up to $200 in Daily Cash rewards. This offer specifically targets Apple Card holders who have embraced the Apple Card Family feature.\n\n\n\n more…",
            "url": "https://9to5mac.com/2023/09/05/apple-card-200-daily-cash-family/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/Apple-Card-global-rollout.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-06T04:19:45Z",
            "content": "Apple Card users can now take advantage of a time-limited promotion that lets them earn up to $200 in Daily Cash rewards. This offer specifically targets Apple Card holders who have embraced the Appl… [+1431 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple signs new long-standing deal with Arm for making Apple Silicon chips",
            "description": "Apple is a long-standing partner of Arm, the Softbank-owned company that developed the ARM architecture that powers every Apple Silicon chip. Following an agreement to invest in Arm stock after the company announced its plans to go public on the US Nasdaq sto…",
            "url": "https://9to5mac.com/2023/09/05/apple-deal-arm-chips/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/Apple-Silicon-chips.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-06T01:41:16Z",
            "content": "Apple is a long-standing partner of Arm, the Softbank-owned company that developed the ARM architecture that powers every Apple Silicon chip. Following an agreement to invest in Arm stock after the c… [+1511 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Apple may launch new products in its retail stores right after the September 12 event",
            "description": "As you probably know, Apple will be holding a special press event on September 12. And although Apple never shares details about the event in advance, it’s almost certain that we’ll see the announcement of the iPhone 15 and Apple Watch Series 9, as well as so…",
            "url": "https://9to5mac.com/2023/09/05/apple-retail-stores-september-event/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/11/Apple-American-Dream.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-06T02:21:54Z",
            "content": "As you probably know, Apple will be holding a special press event on September 12. And although Apple never shares details about the event in advance, it’s almost certain that we’ll see the announcem… [+1957 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Filipe Espósito",
            "title": "Here’s another look at the rumored boring new colors for the iPhone 15",
            "description": "A few days ago, images of iPhone 15 and iPhone 15 Pro dummy units floating around the internet gave us a better look at the potential colors for the new models. When it comes to the regular iPhone 15, it seems that Apple has opted for really muted (and boring…",
            "url": "https://9to5mac.com/2023/09/05/rumored-new-colors-iphone-15/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/09/iPhone-15-colors.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-06T04:54:18Z",
            "content": "A few days ago, images of iPhone 15 and iPhone 15 Pro dummy units floating around the internet gave us a better look at the potential colors for the new models. When it comes to the regular iPhone 15… [+1925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Benjamin Mayo",
            "title": "China bans government officials from using iPhones at work",
            "description": "The Wall Street Journal reports this morning that Apple iPhone and other foreign technology devices have been banned for use in Chinese government agencies. Workers are no longer allowed to use these devices for work, or even bring them into the office premis…",
            "url": "https://9to5mac.com/2023/09/06/chinese-bans-government-officials-from-using-iphones-at-work/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/iphone-china.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-09-06T08:29:18Z",
            "content": "The Wall Street Journal reports this morning that Apple iPhone and other foreign technology devices have been banned for use in Chinese government agencies. Workers are no longer allowed to use these… [+1535 chars]"
        },
        {
            "source": {
                "id": "vice-news",
                "name": "Vice News"
            },
            "author": "Emily Green, Leah Feiger",
            "title": "The Serial Killer Hiding in Plain Sight",
            "description": "Though government officials likened him to Ted Bundy, it took months before an alleged American serial killer’s murder of sex workers in Mexico raised the alarm.",
            "url": "https://www.vice.com/en/article/epv54m/the-serial-killer-hiding-in-plain-sight",
            "urlToImage": "https://video-images.vice.com/articles/64f73d78e35804d11564046f/lede/1693924869099-serial-killer-tijuana.jpeg?image-resize-opts=Y3JvcD0xeHc6MC45ODM2OTc4MzMwNjU4MTA2eGg7Y2VudGVyLGNlbnRlciZyZXNpemU9MTIwMDoqJnJlc2l6ZT0xMjAwOio",
            "publishedAt": "2023-09-06T11:00:00Z",
            "content": "DOWNEY, Calif — For months, Toby watched the apartment complex in this quiet, working class Los Angeles suburb every chance he got. He came on his lunch break, after work, on the weekends between his… [+26406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (William Gallagher)",
            "title": "Apple's iMessage gets a reprieve from EU law",
            "description": "Both Apple's iMessage and Microsoft's Bing appear to have been removed from compliance with the EU's Digital Markets Act while the company's protests are investigated.The Digital Markets Act (DMA) was really created specifically to target Apple, Google, Amazo…",
            "url": "https://appleinsider.com/articles/23/09/06/apples-imessage-gets-a-reprieve-from-eu-law",
            "urlToImage": "https://photos5.appleinsider.com/gallery/51155-101060-european-union-flag-xl.jpg",
            "publishedAt": "2023-09-06T10:25:34Z",
            "content": "Both Apple's iMessage and Microsoft's Bing appear to have been removed from compliance with the EU's Digital Markets Act while the company's protests are investigated.\r\nThe Digital Markets Act (DMA) … [+2064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Mike Wuerthele)",
            "title": "China completely bans use of iPhone for government business",
            "description": "In a move made ostensibly for security reasons, China has mandated that central government office workers not use the iPhone for work, nor bring it into the building at all.iPhone 14 Pro MaxThe move is an escalation by the Chinese government. The iPhone has h…",
            "url": "https://appleinsider.com/articles/23/09/06/china-completely-bans-use-of-iphone-for-government-business",
            "urlToImage": "https://photos5.appleinsider.com/gallery/55272-112284-iPhone14-ProMax-banner-xl.jpg",
            "publishedAt": "2023-09-06T10:12:08Z",
            "content": "iPhone 14 Pro Max\r\nIn a move made ostensibly for security reasons, China has mandated that central government office workers not use the iPhone for work, nor bring it into the building at all.\r\nThe m… [+1727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "そうこ",
            "title": "Appleが「安価なMacBook」を開発中とのうわさ。リリースは来年？",
            "description": "Image:Chikena/Shutterstock.com来週発表されるだろうiPhone15が頭から一瞬消し飛ぶような話が聞こえてきました。Appleが…低価格の…ラップトップを…作っている?!今まで出してこなかった、低価格帯のノートパソコンDigiTimesが業界関係者からの話として報じているのは、Appleが、既存のMacBookPro/Airとは一線を画す端末を来年リリースするらしいとい",
            "url": "https://www.gizmodo.jp/2023/09/274861.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/09/06/shutterstock_1233768853.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-09-06T02:00:00Z",
            "content": "iPhone 15\r\nApple?!\r\nDigiTimesAppleMacBook Pro/AirApple\r\nApple\r\nAppleChromebook\r\nApple1Chromebook\r\nChromebook1\r\nChromebookApple\r\nOSiPadOSOnly\r\nMacBook SE\r\nAppleApple\r\nAppleiPhone SEApple Watch SE\r\nApp… [+105 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.jp"
            },
            "author": "小暮ひさのり",
            "title": "iOS 17とiPadOS 17開発順調。今年はきっと同時リリースでしょう",
            "description": "Image:Apple新機能、楽しみ〜！現在ベータ版が公開されているiPhone用の次期OS「iOS17」とiPad用の「iPadOS17」。例年であれば、iPhoneの新作の発売ちょっと前にリリースされるサイクル。そして、今年もその日が近づきつつあります。カレンダーに丸。Apple新製品発表イベントは日本時間9月13日午前2時から今年のApple新製品発表イベントはスティーブ・ジョブズ・シアター",
            "url": "https://www.gizmodo.jp/2023/09/ios-17-ipados-17-dev-fin.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/09/06/20230906iok00.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-09-06T01:00:00Z",
            "content": "Copyright © mediagene Inc. All Rights Reserved."
        },
        {
            "source": {
                "id": null,
                "name": "Windows Central"
            },
            "author": "richard.devine@futurenet.com (Richard Devine)",
            "title": "Apple's rumored 'low-cost' MacBook would be more worrying for Microsoft than Google",
            "description": "Apple is rumored to be making a cheaper MacBook with an education focus, but I think it's Windows laptops rather than Chromebooks that could be hit most.",
            "url": "https://www.windowscentral.com/hardware/laptops/apples-rumored-low-cost-macbook-would-be-more-worrying-for-microsoft-than-google",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/X5SzeauBrWy9GFnqkyqT9M-1200-80.jpg",
            "publishedAt": "2023-09-06T10:16:38Z",
            "content": "As reported by our pals over at iMore, there's a rumor afoot that Apple will finally embrace lower-cost laptops. Not just in the sense of keeping around older models and slashing the price, either. \r… [+4142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Fran Bouzas",
            "title": "Cinco nuevas funciones de los AirPods que llegarán con iOS 17 y el iPhone 15",
            "description": "Queda menos de una semana para que se celebre la Keynote de septiembre de Apple en la que se presentará, si todo va según lo previsto, el Apple Watch Series 9, el Apple Watch Ultra de segunda generación, unos AirPods Pro con puerto USB-C y los iPhone 15 y 15 …",
            "url": "https://www.applesfera.com/airpods/cinco-nuevas-funciones-airpods-que-llegaran-ios-17-iphone-15",
            "urlToImage": "https://i.blogs.es/bd92e7/6-1-/840_560.jpeg",
            "publishedAt": "2023-09-06T08:01:39Z",
            "content": "Queda menos de una semana para que se celebre la Keynote de septiembre de Apple en la que se presentará, si todo va según lo previsto, el Apple Watch Series 9, el Apple Watch Ultra de segunda generac… [+3339 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Applesfera.com"
            },
            "author": "Miguel López",
            "title": "\"Detesto la palabra normal”: Tim Cook confiesa qué le motivó a hacer pública su orientación sexual",
            "description": "Tim Cook no sólo defiende la privacidad en Apple: también defiende la suya a capa y espada. Mientras mucha gente conoce los detalles de la vida de Steve Jobs, casi nadie diría (sin buscarlo en Google) en qué calle vive o qué restaurantes prefiere. Cook defien…",
            "url": "https://www.applesfera.com/curiosidades/detesto-palabra-normal-tim-cook-confiesa-que-le-motivo-a-hacer-publica-su-orientacion-sexual",
            "urlToImage": "https://i.blogs.es/4f8295/captura-de-pantalla-2023-09-05-a-las-23.25.38/840_560.jpeg",
            "publishedAt": "2023-09-06T09:01:40Z",
            "content": "Tim Cook no sólo defiende la privacidad en Apple: también defiende la suya a capa y espada. Mientras mucha gente conoce los detalles de la vida de Steve Jobs, casi nadie diría (sin buscarlo en Google… [+2092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Simon Krebs",
            "title": "Anzeige: Apple Macbook Pro mit über 1.200 Euro Rabatt sichern",
            "description": "Bei Amazon sind derzeit verschiedene Apple-Produkte wie iPhone, Apple Watch, iPad und besonders ein Macbook Pro im Sonderangebot. Wie lange? (Macbook, Apple)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fanzeige-apple-macbook-pro-mit-ueber-1-200-euro-rabatt-sichern-2309-177429.html&referer=https%3A%2F%2Ft.co%2F792a82824c",
            "urlToImage": null,
            "publishedAt": "2023-09-06T10:35:03Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Tobias Költzsch",
            "title": "Headset: iPhone-Apps laufen direkt auf Apples Vision Pro",
            "description": "Im Herbst soll Apples Headset Vision Pro einen eigenen App Store bekommen - und iPhone-Apps ohne Änderungen abspielen können. (Vision Pro, Apple)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fheadset-iphone-apps-laufen-direkt-auf-apples-vision-pro-2309-177417.html&referer=https%3A%2F%2Ft.co%2F0693c77c94",
            "urlToImage": null,
            "publishedAt": "2023-09-06T07:27:02Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka Android"
            },
            "author": "Alejandro Alcolea",
            "title": "El Pixel 8 se ha vuelto a filtrar: un error de Google confirma algunas de sus características",
            "description": "Es increíble, pero Google lo ha vuelto a hacer. El Google Pixel 8 lleva meses filtrado y ya conocemos tanto algunas de sus características como el diseño. Parecía que no tendríamos demasiadas sorpresas ni en diseño ni en características más allá de los lógico…",
            "url": "https://www.xatakandroid.com/moviles-android/pixel-8-se-ha-vuelto-a-filtrar-error-google-confirma-algunas-sus-caracteristicas",
            "urlToImage": "https://i.blogs.es/b6a41b/f5tlz_mw0aa6imq/840_560.jpeg",
            "publishedAt": "2023-09-06T07:31:40Z",
            "content": "Es increíble, pero Google lo ha vuelto a hacer. El Google Pixel 8 lleva meses filtrado y ya conocemos tanto algunas de sus características como el diseño. Parecía que no tendríamos demasiadas sorpres… [+3112 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka Android"
            },
            "author": "Iván Ramírez",
            "title": "Zoom en Android Auto, un nuevo widget y tres novedades más que llegan a tu Android en septiembre",
            "description": "Las aplicaciones y servicios de Google en Android cambian constantemente pero para que no nos perdamos la compañía acostumbra a resumirnos las novedades trimestrales que vienen en camino y, a veces, también las mensuales. En esta ocasión, Google nos cuenta qu…",
            "url": "https://www.xatakandroid.com/sistema-operativo/zoom-android-auto-nuevo-widget-tres-novedades-que-llegan-a-tu-android-septiembre",
            "urlToImage": "https://i.blogs.es/9b1161/androidseptiembre/840_560.jpeg",
            "publishedAt": "2023-09-06T07:01:40Z",
            "content": "Las aplicaciones y servicios de Google en Android cambian constantemente pero para que no nos perdamos la compañía acostumbra a resumirnos las novedades trimestrales que vienen en camino y, a veces, … [+2927 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Team AA",
            "title": "How long does a MacBook battery last?",
            "description": "How long does a MacBook battery last? In this article, we’ll answer the question and show you how to optimize your Apple laptop's power.",
            "url": "https://www.androidauthority.com/how-long-does-a-macbook-battery-last-3361447/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/07/apple-macbook-air-15-inch-lid.jpg",
            "publishedAt": "2023-09-06T07:31:52Z",
            "content": "Apple is no stranger to criticism regarding battery life on its devices. Historically, iPhone battery life was weak, though things have improved. But what about Apples laptops? How long does a MacBoo… [+5039 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Stéphane Ficca",
            "title": "Un nouveau jeu vidéo James Bond arrive… mais vous allez être (très ?) déçu",
            "description": "C'est officiel, un nouveau jeu vidéo James Bond 007 sera disponible fin septembre. Mais c'est quoi ce Cypher 007 au juste ?",
            "url": "https://www.presse-citron.net/un-nouveau-jeu-video-james-bond-arrive-mais-vous-allez-etre-tres-decu/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2023/09/james-bond-cypher.jpg",
            "publishedAt": "2023-09-06T06:00:19Z",
            "content": "<ul><li>A la surprise générale, la licence 007 fait son retour dans le monde du jeu vidéo</li><li>007 Cypher sera lancé le 29 septembre prochain</li><li>Rangez vos PlayStation, Xbox et Nintendo Switc… [+2221 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Presse-citron"
            },
            "author": "Setra",
            "title": "Acheter un iPhone 15 Pro risque d’être plus compliqué que prévu",
            "description": "Des rumeurs suggèrent qu’en plus d’être plus chers, les iPhone 15 Pro et iPhone 15 Pro Max pourraient avoir une disponibilité limitée au lancement.",
            "url": "https://www.presse-citron.net/acheter-un-iphone-15-pro-risque-detre-plus-complique-que-prevu/",
            "urlToImage": "https://www.presse-citron.net/app/uploads/2022/09/iphone-14-pro-encoche-reduite.jpg",
            "publishedAt": "2023-09-06T07:00:12Z",
            "content": "<ul><li>La disponibilité des iPhone 15 Pro et iPhone 15 Pro Max pourrait être limitée au lancement</li><li>Ces deux modèles pourraient également coûter plus cher par rapport à liPhone 14 Pro et liPho… [+3496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Hadlee Simons",
            "title": "The EU will force these platforms to open up to rivals, and here’s when",
            "description": "The EU has announced the gatekeeper platforms that need to open up to rivals. From Android to YouTube, here's the list.",
            "url": "https://www.androidauthority.com/eu-digital-markets-act-gatekeeper-platforms-list-3361518/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/06/google-pixel-tablet-apple-ipad-air-logo-2-scaled.jpg",
            "publishedAt": "2023-09-06T10:51:54Z",
            "content": "<ul><li>The European Commission has revealed its list of gatekeeper platforms.</li><li>These platforms will need to open up to rivals within six months.</li><li>Designated gatekeepers include Android… [+1787 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Andy Meek",
            "title": "Missing Ted Lasso? These 3 streaming TV shows are just for you",
            "description": "The Apple TV+ breakout hit Ted Lasso took its Season 3 bow back in May, representing a bittersweet farewell to one of the most beloved …\nThe post Missing Ted Lasso? These 3 streaming TV shows are just for you appeared first on BGR.",
            "url": "https://bgr.com/entertainment/missing-ted-lasso-these-3-streaming-tv-shows-are-just-for-you/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2023/06/rsz_gettyimages-1486041737.jpg?quality=82&strip=all",
            "publishedAt": "2023-09-06T01:10:00Z",
            "content": "The Apple TV+ breakout hit Ted Lasso took its Season 3 bow back in May, representing a bittersweet farewell to one of the most beloved TV shows of the post-pandemic era. Still, not all of Ted Lasso’s… [+4944 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Joshua Hawkins",
            "title": "How to link your notes in iOS 17",
            "description": "iOS 17 is bringing major changes to the iPhone this fall. Not only is it going to introduce tons of new features, like the new …\nThe post How to link your notes in iOS 17 appeared first on BGR.",
            "url": "https://bgr.com/tech/how-to-link-your-notes-in-ios-17/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2023/07/best-iphone-wallpapers-bgr.jpg?quality=82&strip=all",
            "publishedAt": "2023-09-06T01:57:00Z",
            "content": "iOS 17 is bringing major changes to the iPhone this fall. Not only is it going to introduce tons of new features, like the new contact posters that appear when someone calls you, but it also brings s… [+1795 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Espinof.com"
            },
            "author": "Albertini",
            "title": "Estrenos (6 de septiembre): 45 series, películas y documentales en Netflix, HBO Max, Amazon, Disney+, Movistar Plus, Filmin, Apple TV+ y Atresplayer",
            "description": "Primer miércoles de septiembre y en lo que sobrevivimos el temporal es momento de ponernos, como cada semana, con los estrenos de esta semana en nuestro querido streaming. Para estos días tenemos 46 series, películas y documentales que llegan desde hoy hasta …",
            "url": "https://www.espinof.com/estrenos/estrenos-6-septiembre-series-peliculas-documentales-netflix-hbo-max-amazon-disney-plus-movistar-plus-filmin-apple-tv-atresplayer",
            "urlToImage": "https://i.blogs.es/d5a267/tlm_dt2_stills_request_4k_rec709_20230228.0020/840_560.jpeg",
            "publishedAt": "2023-09-06T07:01:40Z",
            "content": "Primer miércoles de septiembre y en lo que sobrevivimos el temporal es momento de ponernos, como cada semana, con los estrenos de esta semana en nuestro querido streaming. Para estos días tenemos 46 … [+4164 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "Stephen Warwick",
            "title": "Apple hits back as EU brands it 'gatekeeper' in landmark move",
            "description": "The EU has today labeled Apple as a gatekeeper under its new Digital Markets Act rules, alongside Meta, Microsoft, Amazon, and Alphabet.",
            "url": "https://www.imore.com/apple/apple-hits-back-as-eu-brands-it-gatekeeper-in-landmark-move",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/hQkbm9ob6wzFsk5ryPkf43-1200-80.jpg",
            "publishedAt": "2023-09-06T09:46:43Z",
            "content": "Apple has hit back at today's EU announcement that the company is one of six gatekeepers in the digital space, following the first landmark designation from the European Commission under its new Digi… [+6265 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
            "title": "Apple could be planning a big change for its iPhone 15 launch",
            "description": "Apple Retail Stores are planning an overnight update on the evening of the iPhone 15 event, according to reports. But should we care?",
            "url": "https://www.imore.com/iphone/iphone-15/apple-could-be-planning-a-big-change-for-its-iphone-15-launch",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/HveLs2DPZWABscgAY5Cya6-1200-80.jpg",
            "publishedAt": "2023-09-06T09:10:01Z",
            "content": "Apple Retail employees across the globe work tirelessly in the build-up to a new iPhone launch to ensure customers have the Apple experience they’ve come to know and love on launch day.\r\nUsually, thi… [+3355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "iMore"
            },
            "author": "Tammy Rogers",
            "title": "Every iPhone and iPad app is about to arrive on Apple Vision Pro",
            "description": "The App Store is coming to Vision Pro, and developers will be able to test their apps to see how they run on the headset.",
            "url": "https://www.imore.com/gaming/virtual-reality/every-iphone-and-ipad-app-is-about-to-arrive-on-apple-vision-pro",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/gpJai5vAbCyQBimhGcA6NC-1200-80.png",
            "publishedAt": "2023-09-06T09:20:34Z",
            "content": "Apple Vision Pro, the company's exciting new $3,500 Spatial Computing Augmented Reality headset, is about to take its next step to become your central computing and entertainment. For app developers … [+2372 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Artie Beaty （Special to ZDNET.com） 翻訳校正： 編集部",
            "title": "Meta、「Vision Pro」対抗のMRヘッドセット開発でLGと提携か",
            "description": "MetaはAppleの「Vision Pro」に対抗するための大きな計画を進めており、それに協力してくれる企業も確保したようだ。",
            "url": "https://japan.cnet.com/article/35208710/",
            "urlToImage": "https://japan.cnet.com/storage/2023/09/06/0e8257c95e3c914270d8fbd60d7e8f03/meta-quest-pro-dockjpg_1280x960.jpg",
            "publishedAt": "2023-09-06T00:27:00Z",
            "content": "MetaAppleVision Pro\r\nMetaLG2022\r\nMetaLGMRLG DisplayLG EnergyLG InnotekLG Electronics\r\n202520002950002024AppleVision Pro3499517000MetaQuest 2299.9947300Quest Pro999159500\r\nMetaQuest 3499.9974800MetaVi… [+67 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Josh Sisco",
            "title": "States, Google settle app store antitrust case",
            "description": "Epic Games and Match Group are still set for a November courtroom showdown with the internet giant.",
            "url": "https://www.politico.com/news/2023/09/06/states-google-settle-app-store-antitrust-case-00114176",
            "urlToImage": "https://static.politico.com/4c/53/02840c1a4aad8a48b1acb9bb1aea/canada-meta-google-news-78809.jpg",
            "publishedAt": "2023-09-06T04:41:17Z",
            "content": "The settlement terms in the app store case were not disclosed, and the agreement is subject to approval by the state attorneys general and the board of directors of Alphabet, Googles parent company. … [+1445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Les Numériques"
            },
            "author": "Rick",
            "title": "Actualité : Bon plan – La tablette Tactile Apple iPad Pro 12,9\" (2021) \"5 étoiles\" à 1 429,99 € (-39%)",
            "description": "La tablette Tactile Apple iPad Pro 12,9\" (2021) passe sous les 1500 € chez Amazon soit une baisse d'environ 39% sur le prix habituellement constaté. C'est actuellement l'un des meilleurs produit de notre comparatif.",
            "url": "https://www.lesnumeriques.com/tablette-tactile/bon-plan-la-tablette-tactile-apple-ipad-pro-12-9-2021-5-etoiles-a-1-429-99-39-n212964.html",
            "urlToImage": "https://cdn.lesnumeriques.com/optim/test/16/163581/f8b11a2b-apple-ipad-pro-12-9-2021-m1-dans-la-main__1200_630__overflow_wtmk.jpeg",
            "publishedAt": "2023-09-06T06:01:02Z",
            "content": "Pour 2021, Apple fait passer un cap à sa tablette la plus haut de gamme. Avec un processeur de MacBook Pro 13 pouces et une dalle mini-led, l'iPad Pro 12,9 (2021) se pose comme un iPad plus ambitieux… [+2066 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xatakamovil.com"
            },
            "author": "Álvaro García M.",
            "title": "Ya es oficial: YouTube se mete en el mundo de los videojuegos, aunque de momento \"en pruebas\"",
            "description": "\"Google, Netflix, Apple y Amazon son los bárbaros en la puerta de la industria del videojuego\", decía Shawn Layden en unas recientes declaraciones. El que fuese uno de los máximos responsables de PlayStation en Sony hasta 2019 ve como las grandes tecnológicas…",
            "url": "https://www.xatakamovil.com/aplicaciones/oficial-youtube-se-mete-mundo-videojuegos-momento-pruebas",
            "urlToImage": "https://i.blogs.es/64dba9/youtube-juegos/840_560.jpeg",
            "publishedAt": "2023-09-06T07:01:40Z",
            "content": "\"Google, Netflix, Apple y Amazon son los bárbaros en la puerta de la industria del videojuego\", decía Shawn Layden en unas recientes declaraciones. El que fuese uno de los máximos responsables de Pla… [+2000 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Appinn.com"
            },
            "author": "青小蛙",
            "title": "视频整理与播放工具 Infuse 7 新增支持阿里云盘",
            "description": "Infuse 7 是苹果系著名的视频整理与播放工具。今日更新 v7.6 版本，新增支持从阿里云盘直接播放视频功能。@AppinnInfuse 7 支持 Mac、iPhone、iPad 和 Apple TV，可以很方便的将",
            "url": "https://www.appinn.com/infuse-7-stream-from-aliyun-drive/",
            "urlToImage": "https://www.appinn.com/wp-content/uploads/2023/09/appinn-feature-images-2023-09-06t112537-310.jpgo_.jpg",
            "publishedAt": "2023-09-06T03:42:34Z",
            "content": "Infuse 7 v7.6 @Appinn\r\nInfuse 7 MaciPhoneiPad Apple TV 68 \r\n Stream from Aliyun Drive\r\nInfuse 7 API API \r\n Reddit API \r\nhttps://www.appinn.com/infuse-7-stream-from-aliyun-drive/"
        },
        {
            "source": {
                "id": null,
                "name": "tagesschau.de"
            },
            "author": "tagesschau.de",
            "title": "Marktbericht: Noch einen kleinen Schritt zurück",
            "description": "Die Stimmung auf dem Börsenparkett bleibt eher trübe. Auch heute müssen sich Anleger auf ein mühsames Lavieren durch den Tag einstellen. Der DAX wird am Morgen zunächst mit Verlusten erwartet.",
            "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-dow-jones-boerse-138.html",
            "urlToImage": "https://images.tagesschau.de/image/6932adf5-7d16-43ec-b308-8e3ac594988b/AAABhv5rOFk/AAABibBxqrQ/16x9-1280/boerse-frankfurt-171.jpg",
            "publishedAt": "2023-09-06T05:26:02Z",
            "content": "Stand: 06.09.2023 07:26 Uhr\r\nDie Stimmung auf dem Börsenparkett bleibt eher trübe. Auch heute müssen sich Anleger auf ein mühsames Lavieren durch den Tag einstellen. Der DAX wird am Morgen zunächst m… [+3699 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "Olli",
            "title": "Apple-Chips: Apple und ARM verlängern Partnerschaft",
            "description": "Apple hat mit seinen eigenen M*-Chips vorwiegend den Laptop-Markt ordentlich aufgemischt. Die SoCs bringen eine unglaubliche Performance-pro-Watt-Rate mit und können somit Leistung bringen und gleichzeitig auch eine verlängerte Akkulaufzeit vorweisen, wenn ma…",
            "url": "https://stadt-bremerhaven.de/apple-chips-apple-und-arm-verlaengern-partnerschaft/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2018/04/logo-apple-groß.jpg",
            "publishedAt": "2023-09-06T11:00:48Z",
            "content": "Apple hat mit seinen eigenen M*-Chips vorwiegend den Laptop-Markt ordentlich aufgemischt. Die SoCs bringen eine unglaubliche Performance-pro-Watt-Rate mit und können somit Leistung bringen und gleich… [+1508 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "André Westphal",
            "title": "Apple Arcade im September 2023: Vier neue Spiele stoßen hinzu",
            "description": "Bei Apple Arcade stoßen im September 2023 vier neue Spiele zur Flatrate hinzu. Konkreter gefasst, sind das die Titel „Cypher 007“, „Japanese Rural Life Adventure“, „Junkworld“ und „Meine Talking Angela 2“. Zusätzlich erscheinen laut einer Pressemeldung von Ap…",
            "url": "https://stadt-bremerhaven.de/apple-arcade-im-september-2023-vier-neue-spiele-stossen-hinzu/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/09/Apple-Arcade-September-2023.jpg",
            "publishedAt": "2023-09-06T09:30:29Z",
            "content": "Bei Apple Arcade stoßen im September 2023 vier neue Spiele zur Flatrate hinzu. Konkreter gefasst, sind das die Titel „Cypher 007“, „Japanese Rural Life Adventure“, „Junkworld“ und „Meine Talking Ange… [+1954 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "André Westphal",
            "title": "Amazon, Google, Apple und Co. könnten die Spielendustrie drastisch verändern",
            "description": "Der ehemalige Leiter der Sony Interactive Entertainment Worldwide Studios (heute PlayStation Studios), Shawn Layden, hat sich zur Zukunft der Spieleindustrie geäußert. Er sieht eine Gefahr durch den Einstieg von Tech-Unternehmen wie Amazon, Apple und Google h…",
            "url": "https://stadt-bremerhaven.de/amazon-google-apple-und-co-koennten-die-spielendustrie-drastisch-veraendern/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/05/Apple-Arcade-new-games-hero_big.jpg.large_2x_.jpg",
            "publishedAt": "2023-09-06T07:30:58Z",
            "content": "Der ehemalige Leiter der Sony Interactive Entertainment Worldwide Studios (heute PlayStation Studios), Shawn Layden, hat sich zur Zukunft der Spieleindustrie geäußert. Er sieht eine Gefahr durch den … [+2233 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "caschy",
            "title": "DMA: Alphabet, Amazon, Apple, ByteDance, Meta und Microsoft sind Torwächter",
            "description": "Heute hat die Europäische Kommission im Rahmen des Gesetzes über digitale Märkte erstmals sechs Gatekeeper (Torwächter (Zuul)) benannt: Alphabet, Amazon, Apple, ByteDance, Meta und Microsoft. Diese Unternehmen bieten wichtige Plattformdienste an, die als zent…",
            "url": "https://stadt-bremerhaven.de/dma-alphabet-amazon-apple-bytedance-meta-und-microsoft-sind-torwaechter/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/09/dma.jpg",
            "publishedAt": "2023-09-06T11:07:12Z",
            "content": "Heute hat die Europäische Kommission im Rahmen des Gesetzes über digitale Märkte erstmals sechs Gatekeeper (Torwächter (Zuul)) benannt: Alphabet, Amazon, Apple, ByteDance, Meta und Microsoft. Diese U… [+3506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Caschys Blog"
            },
            "author": "Olli",
            "title": "Vision Pro: Apps von iPhone und iPad werden im neuen App Store verfügbar sein",
            "description": "Apple wird für die Vision Pro einen ganz neuen App Store herausbringen, der euch den Zugriff auf Apps für das Headset bietet, aber auch alle kompatiblen iPhone- und iPad-Apps enthält. Diese kann man in einer Side-by-Side-Sicht auf der Oberfläche im...Zum Beit…",
            "url": "https://stadt-bremerhaven.de/vision-pro-apps-von-iphone-und-ipad-werden-im-neuen-app-store-verfuegbar-sein/",
            "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/06/IMAGE-2023-06-05-202454.jpg",
            "publishedAt": "2023-09-06T08:00:39Z",
            "content": "Apple wird für die Vision Pro einen ganz neuen App Store herausbringen, der euch den Zugriff auf Apps für das Headset bietet, aber auch alle kompatiblen iPhone- und iPad-Apps enthält. Diese kann man … [+918 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.ru"
            },
            "author": "Дарья Бакина",
            "title": "Подкаст «Повар варит ти»: button — пуговица, seam — шов, lace — кружево",
            "description": "В этом эпизоде запомнить новые английские слова вам помогут авоська, Али-Баба и феи.",
            "url": "https://lifehacker.ru/povar-varit-ti-53/",
            "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2023/06/LX-saJt-LX_1687507325-1024x512.jpg",
            "publishedAt": "2023-09-06T10:30:56Z",
            "content": "« » , , . , . .\r\n , : button , seam , lace .\r\n , .\r\n « » , : Apple Podcasts, Google Podcasts, YouTube, «», «», «», CastboxSoundStream."
        },
        {
            "source": {
                "id": "lenta",
                "name": "Lenta"
            },
            "author": "Анастасия Шейкина",
            "title": "Минобрнауки запретило своим сотрудникам пользоваться iPhone",
            "description": "Сотрудникам Минобрнауки запретили использовать iPhone и другую технику Apple во время исполнения служебных обязанностей. Об этом пишут «Ведомости» со ссылкой на документ. Его подлинность документа два собеседника издания в разных институтах РАН. Подобные огра…",
            "url": "https://lenta.ru/news/2023/09/06/minobrnauki/",
            "urlToImage": "https://icdn.lenta.ru/images/2023/09/06/08/20230906084713026/share_6af21b41f2eb47ae220c195c466fe087.jpg",
            "publishedAt": "2023-09-06T05:59:57Z",
            "content": "iPhone Apple . «».\r\n , () , , Apple . .\r\n« . », , . .\r\n Apple. , .\r\n iPhone . , , iPhone, «» . .\r\n , Apple , ."
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "mariojmtz",
            "title": "Apple TV 4K 64GB (3rd generation) - Wi-Fi - $99.99 at Costco",
            "description": "Costco Wholesale has for their Members: 64GB Apple TV 4K Wi‑Fi Streaming Media Player (3rd Gen, 2022, MN873LL/A) on sale for $99.99. Shipping is free.\r\n\r\nThanks to Community Member mariojmtz for ...",
            "url": "https://slickdeals.net/f/16902424-apple-tv-4k-64gb-3rd-generation-wi-fi-99-99-at-costco",
            "urlToImage": "https://static.slickdealscdn.com/attachment/6/3/1/1/5/4/8/14161753.attach",
            "publishedAt": "2023-09-06T07:16:37Z",
            "content": "I've had many Rokus (all Ultras now) and as well as Apple TV. They both work very well and have their differences. Will always have at least one of each as it has happened to me that one stops workin… [+522 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slickdeals.net"
            },
            "author": "LivelyDime2637",
            "title": "77\" LG OLED Class B3 Series OLED77B3PUA Smart TV + Free Shipping - $1799.99 [LG Partner Store]",
            "description": "LG Electronics via LG Partner Store has *77\" LG Class B3 Series OLED 4K UHD Smart TV* (OLED77B3PUA) + *Professional TV Mounting* (mount not included) on sale for *$1799.99* when you sign-up/login as...",
            "url": "https://slickdeals.net/f/16903039-lg-members-employer-perks-77-lg-class-b3-series-oled-4k-uhd-smart-tv-1800-free-shipping-limited-areas",
            "urlToImage": "https://static.slickdealscdn.com/attachment/1/7/7/4/0/5/9/4/14162728.attach",
            "publishedAt": "2023-09-06T05:22:13Z",
            "content": "LG Electronics via LG Partner Store has 77\" LG Class B3 Series OLED 4K UHD Smart TV (OLED77B3PUA) + Professional TV Mounting (mount not included) on sale for $1799.99 when you sign-up/login as a qual… [+1284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ifanr.com"
            },
            "author": "张大雄",
            "title": "神级播放器 Infuse 喜提史诗级更新，「阿里云盘」成了大赢家",
            "description": "我已更新，亲测好用#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
            "url": "https://www.ifanr.com/1561294",
            "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/09/1.png",
            "publishedAt": "2023-09-06T10:46:11Z",
            "content": "Infuse \r\nInfuse iPhone Mac iPad Apple TV \r\n Infuse 30 ACC 10 infuse OpenSubtitles \r\nInfuse Infuse Infuse \r\n Infuse Infuse Infuse \r\n infuse infuse infuse \r\nInfuse Infuse Alist Web DAV \r\n Infuse Infuse… [+106 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "01net.com"
            },
            "author": "Florian Bayard",
            "title": "iPhone : cet appareil peut rendre fous les utilisateurs Apple",
            "description": "Grâce à un petit appareil abordable et un peu d'expertise, un chercheur a trouvé le moyen de rendre complètement fous les utilisateurs d'iPhone. On fait le point sur l'astuce de cet expert en sécurité informatique, qui consiste à détourner les possibilités of…",
            "url": "https://www.01net.com/actualites/iphone-appareil-rendre-fous-utilisateurs-apple.html",
            "urlToImage": "https://www.01net.com/app/uploads/2023/09/flipper-zero-outil-rendre-fou-utilisateurs-iphone.jpg",
            "publishedAt": "2023-09-06T10:00:28Z",
            "content": "Grâce à un petit appareil abordable et un peu d’expertise, un chercheur a trouvé le moyen de rendre complètement fous les utilisateurs d’iPhone. On fait le point sur l’astuce de cet expert en sécurit… [+3954 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "AP News",
            "title": "EU targets Apple, Amazon, Alphabet, ByteDance, Meta, Microsoft in next phase of digital crackdown",
            "description": "LONDON (AP) — The European Union on Wednesday targeted Apple, Amazon, Microsoft, Google parent Alphabet, Facebook owner Meta and TikTok parent ByteDance under new digital rules aimed at reining in the market power of online companies.Read more...",
            "url": "https://qz.com/eu-targets-apple-amazon-alphabet-bytedance-meta-mi-1850807396",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7800254188933fac86b16c9d80d6e129.jpg",
            "publishedAt": "2023-09-06T09:43:47Z",
            "content": "LONDON (AP) The European Union on Wednesday targeted Apple, Amazon, Microsoft, Google parent Alphabet, Facebook owner Meta and TikTok parent ByteDance under new digital rules aimed at reining in the … [+2073 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Highsnobiety"
            },
            "author": null,
            "title": "Don't Call It Streetwear, Sundae School's Making Smokewear",
            "description": "Highsnobiety's Neu York is a multi-media celebration of the Big Apple. Explore everything happening here and shop the collection from September 8, online and i…",
            "url": "https://www.highsnobiety.com/p/sundae-school-smokewear-interview/",
            "urlToImage": "https://www.highsnobiety.com/static-assets/dato/1693913033-hs-sundae-school-neu-york-feat.jpg",
            "publishedAt": "2023-09-06T09:43:40Z",
            "content": "Highsnobiety's Neu York is a multi-media celebration of the Big Apple. Explore everything happening here and shop the collection from September 8, online and in-store.\r\n\"It started out as a highbrow … [+3772 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jenny Leonard, Michelle Jamrisko and Debby Wu",
            "title": "US Seeks Details on Made-in-China Huawei Chip as Debate Grows",
            "description": "(Bloomberg) -- The US is working to establish the full details of Huawei Technologies Co.’s advances in chip technology, news of which has stoked Chinese...",
            "url": "https://finance.yahoo.com/news/us-seeks-details-made-china-041937331.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/jPdwHdSKcxzHhAEd3QOFjQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/5b146916dbb2cf1aab486ba62c525bf6",
            "publishedAt": "2023-09-06T04:19:37Z",
            "content": "(Bloomberg) -- The US is working to establish the full details of Huawei Technologies Co.s advances in chip technology, news of which has stoked Chinese nationalism and ignited speculation about the … [+3988 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Megha Bahree",
            "title": "India’s manufacturers cash in as brands seek refuge from US-China tensions",
            "description": "Indian firms are capitalising on a push by leading brands to diversify their suppliers away from China.",
            "url": "https://www.aljazeera.com/economy/2023/9/6/indias-manufacturers-cash-in-as-brands-seek-refuge-from-us-china-tensions",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/09/indiaproduction-1693981790.jpeg?resize=1200%2C675",
            "publishedAt": "2023-09-06T08:00:43Z",
            "content": "Noida, India At an assembly plant for Motorola smartphones on the outskirts of the Indian capital, large white machines hiss and beep as they mount CPUs on motherboards, while lasers etch barcodes on… [+6442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Puromarketing.com"
            },
            "author": "Redacción",
            "title": "La medición del retorno de inversión sigue siendo un desafío importante para los anunciantes",
            "description": "PuroMarketing - La medición del retorno de inversión publicitaria (ROI) desempeña un papel crítico en el éxito de las estrategias de marketing y publicidad de las empresas. Para los anunciantes, comprender cuánto están obteniendo de vuelta por cada dólar inve…",
            "url": "https://www.puromarketing.com/162/212531/medicion-retorno-inversion-sigue-siendo-desafio-importante-para-anunciantes",
            "urlToImage": "https://www.puromarketing.com/uploads/img/contents/2023/xHfCrbnFkOmDNRYZA6P5/xHfCrbnFkOmDNRYZA6P5_post_imagen_prev.jpg",
            "publishedAt": "2023-09-06T08:49:00Z",
            "content": "La medición del retorno de inversión publicitaria (ROI) desempeña un papel crítico en el éxito de las estrategias de marketing y publicidad de las\r\n empresas. Para los anunciantes, comprender cuánto … [+4410 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Canonrumors.com"
            },
            "author": "Canon Rumors",
            "title": "Save big on M1 Max MacBook Pro Laptops",
            "description": "B&H Photo has some big discounts on well-specced M1 Max MacBook Pro laptops as well as a deal on M1 Pro MacBook Pro and the M1 Ultra Mac Studio. These deals will be live for the Bild Expo, which ends on September 7. Apple M1 Max MacBook Deals Apple M1 Pro Mac…",
            "url": "https://www.canonrumors.com/save-big-on-m1-max-macbook-pro-laptops/",
            "urlToImage": "https://www.canonrumors.com/wp-content/uploads/2023/09/applebildexpo2023.jpg",
            "publishedAt": "2023-09-06T09:04:05Z",
            "content": "B&amp;H Photo has some big discounts on well-specced M1 Max MacBook Pro laptops as well as a deal on M1 Pro MacBook Pro and the M1 Ultra Mac Studio.\r\nThese deals will be live for the Bild Expo, which… [+712 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Next INpact"
            },
            "author": null,
            "title": "#LeBrief : Apple et Microsoft vs DSA, Android change de look, Elon Musk porte plainte, Apple rachète BIS Records",
            "description": "Retrouvez l'actualité en bref de l'informatique et du numérique.",
            "url": "https://www.nextinpact.com/lebrief/1306",
            "urlToImage": "https://cdn2.nextinpact.com/images/bd/wide-linked-media/2360.jpg",
            "publishedAt": "2023-09-06T05:14:09Z",
            "content": "Elon Musk a annoncé une action en diffamation contre l'Anti-Defamation League (ADL), une organisation de lutte contre l'antisémitisme, l'extrémisme et le sectarisme, qu'il accuse de l'avoir faussemen… [+2178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Next INpact"
            },
            "author": "Mathilde Saliou",
            "title": "DMA : la Commission Européenne nomme les six contrôleurs d’accès",
            "description": "La Commission Européenne publie aujourd’hui la liste des contrôleurs d’accès concernés par le Digital Markets Act. Ils sont six et la liste ne réserve pas de surprise particulière.",
            "url": "https://www.nextinpact.com/article/72365/dma-commission-europeenne-nomme-six-controleurs-dacces",
            "urlToImage": "https://cdnx.nextinpact.com/data-next/images/bd/wide-linked-media/774.jpg",
            "publishedAt": "2023-09-06T09:40:25Z",
            "content": "La Commission Européenne publie aujourdhui la liste des contrôleurs daccès concernés par le Digital Markets Act. Ils sont six et la liste ne réserve pas de surprise particulière. La liste des contrôl… [+672 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eurogamer.net"
            },
            "author": "Victoria Kennedy",
            "title": "James Bond game Cypher 007 shoots onto Apple Arcade this month",
            "description": "James Bond will bring his espionage hijinks to Apple Arcade later this month. \n\nOn 29th September, players will take on the role of a brand-new Bond in Cypher 007. This top-down mobile title comes from Tilting Point, and promises a return to some classic Bond…",
            "url": "https://www.eurogamer.net/james-bond-game-cypher-007-shoots-onto-apple-arcade-this-month",
            "urlToImage": "https://assetsio.reedpopcdn.com/Cybpher-007.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            "publishedAt": "2023-09-06T10:19:46Z",
            "content": "James Bond will bring his espionage hijinks to Apple Arcade later this month. \r\nOn 29th September, players will take on the role of a brand-new Bond in Cypher 007. This top-down mobile title comes fr… [+1579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digiday"
            },
            "author": "Kayleigh Barber",
            "title": "How The Trade Desk’s new sub-floor bidding tactic will affect SSPs, publishers",
            "description": "TTD's move to bid below floor prices may be done in the name of transparency, but it could also be the DSP's latest tactic for getting publishers to join OpenPath.",
            "url": "http://digiday.com/media/how-the-trade-desks-new-sub-floor-bidding-tactic-will-affect-ssps-publishers/",
            "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2023/03/trade-desk-openpath-digiday.jpg",
            "publishedAt": "2023-09-06T04:01:00Z",
            "content": "As of this month, The Trade Desk is no longer letting publisher- or SSP-dictated floor prices influence the bids they send out.First reported by Insider, The Trade Desk is now sending out all bids on… [+5709 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digiday"
            },
            "author": "Tim Peterson",
            "title": "Future of TV Briefing: How the TV, streaming and digital video industry spent its summer",
            "description": "This week’s Future of TV Briefing recaps a summer that the TV, streaming and digital video industry may hope to soon forget.",
            "url": "http://digiday.com/future-of-tv/future-of-tv-briefing-how-the-tv-streaming-and-digital-video-industry-spent-its-summer-3/",
            "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2023/04/dog-relaxing-tv-digiday.jpg",
            "publishedAt": "2023-09-06T04:01:00Z",
            "content": "This weeks Future of TV Briefing recaps a summer that the TV, streaming and digital video industry may hope to soon forget.Yeesh. Did any industry wish summer were over sooner than the TV and streami… [+7892 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Creative Bloq"
            },
            "author": "joe.foley@futurenet.com (Joseph Foley)",
            "title": "Behold, the touchscreen Apple iMac that time forgot",
            "description": "The iTouch iMac was ahead of its time.",
            "url": "https://www.creativebloq.com/news/touchscreen-imac",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/omSLJ4s2X8jQRJYjEnT45i-1200-80.jpg",
            "publishedAt": "2023-09-06T08:00:46Z",
            "content": "There's been much debate and speculation about whether Apple will ever make a touchscreen Mac. While 2-in-1s, including Microsoft's Surface range, have grown in popularity, tablets and PCs remain two… [+3027 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Creative Bloq"
            },
            "author": "Daniel Piper",
            "title": "Google roasts Apple's rumoured iPhone 15 redesign",
            "description": "(To be fair, it has a point.)",
            "url": "https://www.creativebloq.com/news/google-iphone-15-ads",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/xtcF7Z7wc6gNYudWpoA8Fa-1200-80.jpg",
            "publishedAt": "2023-09-06T09:43:30Z",
            "content": "Apple's competitors have form when it comes to taking swipes at the company via their own ads. From Samsung to Intel, various brands have managed to come across as slightly desperate (or in the latte… [+1978 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketingdirecto.com"
            },
            "author": "Fabiana Seara",
            "title": "¿Carga con USB-C?: Google se burla de Apple y del iPhone 15 en su campaña «Spa Day»",
            "description": "El Pixel de Google se burla de las supuestas novedades del iPhone 15 en el spot \"Spa Day\", que forma parte de la serie \"Best Phones Forever\". \nLa entrada ¿Carga con USB-C?: Google se burla de Apple y del iPhone 15 en su campaña «Spa Day» se publicó primero en…",
            "url": "https://www.marketingdirecto.com/anunciantes-general/anunciantes/usb-c-google-mofa-apple-divertido-relajante-spot",
            "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2023/09/Spa-Day-Apple-y-Google.jpg",
            "publishedAt": "2023-09-06T10:19:14Z",
            "content": "El Pixel de Google se burla de las supuestas novedades del iPhone 15 en el spot \"Spa Day\", que forma parte de la serie \"Best Phones Forever\".Google se mofa de las novedades que llegarán al nuevo iPho… [+1912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "La Vanguardia"
            },
            "author": "Daniel García",
            "title": "Apple podría copiar uno de los accesorios estrella de los primeros Pixel para el iPhone 15",
            "description": "Apple está cada vez más cerca de mostrar su nueva línea de smartphones, los esperados iPhone 15, y a su alrededor vuelan muchas dudas. Una de ellas recae sobre uno de sus accesorios oficiales, la funda, la cual podría sufrir cambios respecto a años atrás. Y e…",
            "url": "https://www.lavanguardia.com/andro4all/apple/apple-podria-copiar-uno-de-los-accesorios-estrella-de-los-primeros-pixel-para-el-iphone-15",
            "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/concepto-iphone-15-ultra-entrada.jpg?width=1200",
            "publishedAt": "2023-09-06T09:01:40Z",
            "content": "Con o sin funda, el iPhone 15 apunta a ser una de las estrellas en ventas en los próximos meses\r\nApple está cada vez más cerca de mostrar su nueva línea de smartphones, los esperados iPhone 15, y a s… [+2271 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "La Vanguardia"
            },
            "author": "JuanMi Guirado",
            "title": "El MacBook más recomendado acaba de bajar de precio: 949 euros con chip M1 y 256 GB",
            "description": "Si necesitas un nuevo ordenador para llevar a clase, estudiar en casa o la biblioteca y realizar tareas intensas en casa, el MacBook Air de 2020 es la mejor compra que harás hoy por 1219 949 euros en Amazon. Con su diseño premium, extrema delgadez y potencia …",
            "url": "https://www.lavanguardia.com/andro4all/ofertas/el-macbook-mas-recomendado-acaba-de-bajar-de-precio-949-euros-con-chip-m1-y-256-gb",
            "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/09/macbook-air-2020-teclado.png?width=1200",
            "publishedAt": "2023-09-06T08:30:07Z",
            "content": "El MacBook Air es el portátil más recomendado para estudiantes y teletrabajo, con mucha diferencia.\r\nSi necesitas un nuevo ordenador para llevar a clase, estudiar en casa o la biblioteca y realizar t… [+3599 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "La Vanguardia"
            },
            "author": "Fran Pérez",
            "title": "Cómo jugar a Starfield en el móvil",
            "description": "Si bien muchos de vosotros ya estaréis surcando las estrellas con Starfield desde el pasado 1 de septiembre, gracias a que optasteis por reservar la edición Premium o Coleccionista de lo nuevo de Bethesda y Microsoft, el resto de los mortales hemos tenido que…",
            "url": "https://www.lavanguardia.com/andro4all/juegos/como-jugar-a-starfield-en-el-movil",
            "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/08/starfield.jpg?width=1200",
            "publishedAt": "2023-09-06T08:45:47Z",
            "content": "Así es cómo puedes jugar a Starfield desde tu móvil\r\nSi bien muchos de vosotros ya estaréis surcando las estrellas con Starfield desde el pasado 1 de septiembre, gracias a que optasteis por reservar … [+6414 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Clubic"
            },
            "author": "Mathilde Rochefort",
            "title": "Apple et Arm prolongent leur accord au-delà de 2040",
            "description": "Apple a signé un accord avec Arm pour l'octroi d'une licence sur sa technologie de puces au-delà de 2040. Il s’agit d’une nouvelle preuve de la confiance accordée au concepteur de puces britannique, qui s’apprête à réaliser son introduction à Wall Street.",
            "url": "https://www.clubic.com/pro/entreprises/apple/actualite-483520-apple-et-arm-prolongent-leur-accord-au-dela-de-2040.html",
            "urlToImage": "https://pic.clubic.com/v1/images/2138938/raw",
            "publishedAt": "2023-09-06T10:40:00Z",
            "content": "Apple a signé un accord avec Arm pour l'octroi d'une licence sur sa technologie de puces au-delà de 2040. Il sagit dune nouvelle preuve de la confiance accordée au concepteur de puces britannique, qu… [+1976 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nextpit.de"
            },
            "author": "Jade Bryan",
            "title": "Sehen wir bald ein günstiges Apple MacBook SE?",
            "description": "Apple dürfte bald eine Reihe von MacBooks auf den Markt bringen, die viel günstiger sind als das MacBook Air und das MacBook Pro. Was können wir erwarten?",
            "url": "https://www.nextpit.de/sehen-wir-bald-ein-guenstiges-apple-macbook-se",
            "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Apple_MacBook_Air_15/nextpit_MacBook_Air_15.jpg",
            "publishedAt": "2023-09-06T06:00:01Z",
            "content": "© nextpit\r\nDas MacBook Pro und das MacBook Air waren schon immer die Premium-Laptops von Apple, wobei die neuesten Modelle jeweils mehr als einen Tausender kosten. Offenbar plant der iPhone-Herstelle… [+2889 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Impress.co.jp"
            },
            "author": null,
            "title": "GPU計測やArm版Windowsにも対応した「Cinebench 2024」",
            "description": "Maxonは9月5日(ドイツ時間)、業界標準とも言えるPCベンチマークソフト「Cinebench」シリーズの最新版「Cinebench 2024」を発表した。同社のサイトより無償でダウンロードできる。x86/x64のWindows版ファイルサイズは1.2GBで、解凍後のサイズは2.35GB。",
            "url": "https://pc.watch.impress.co.jp/docs/news/1529138.html",
            "urlToImage": "https://pc.watch.impress.co.jp/img/pcw/list/1529/138/2.jpg",
            "publishedAt": "2023-09-06T01:47:54Z",
            "content": "Maxon95()PCCinebenchCinebench 2024x86/x64Windows1.2GB2.35GB \r\n Cinema 4DRedshiftCPUGPU \r\n Cinebench R20R23GPU/GPUGPU \r\n WindowsmacOSx86/x64AppleArmWindows(Snapdragon)GPUNVIDIA/AMD/Apple \r\n Ryzen 7 68… [+67 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tomshw.it"
            },
            "author": "Luca Zaninello",
            "title": "Flipper Zero usato per attaccare iPhone, diventa inutilizzabile",
            "description": "Flipper Zero può essere utilizzato per infastidire i proprietari di iPhone e iPad, poiché non vi è alcun modo per ignorare questi pop-up.",
            "url": "https://www.tomshw.it/smartphone/flipper-zero-usato-per-attaccare-iphone-diventa-inutilizzabile/",
            "urlToImage": "https://www.tomshw.it/images/images/2023/07/flipper-zero-284999.jpg",
            "publishedAt": "2023-09-06T08:11:06Z",
            "content": "Apple Flipper Zero usato per attaccare iPhone, diventa inutilizzabile\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri … [+3598 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tomshw.it"
            },
            "author": "Luca Zaninello",
            "title": "Cinebench 2024 massacrerà anche le GPU grazie a Redshift",
            "description": "Cinebench 2024 promette di ridefinire il metodo di valutazione di CPU e GPU, allargando la compatibilità a piattaforme non disponibili prima.",
            "url": "https://www.tomshw.it/hardware/cinebench-2024-massacrera-anche-le-gpu-grazie-a-redshift/",
            "urlToImage": "https://www.tomshw.it/images/images/2023/09/maxon-cinebench-2024-287778.jpg",
            "publishedAt": "2023-09-06T07:52:42Z",
            "content": "Software Cinebench 2024 massacrerà anche le GPU grazie a Redshift\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri di p… [+2926 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Appbank.net"
            },
            "author": "岩佐",
            "title": "「iPhone 15」は〝カメラ進化〟がヤバい。全モデルの詳細仕様リーク",
            "description": "登場が近づく「iPhone 15」シリーズの詳細なカメラスペックを、Apple専門メディア「MacRumors」がリークしています。 *Category:テクノロジー Technology *Source：MacRumo […]",
            "url": "https://www.appbank.net/2023/09/06/technology/2554501.php",
            "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/09/2023-0906-iPhone-15-cam-thumb-1.jpeg",
            "publishedAt": "2023-09-06T02:23:20Z",
            "content": "iPhone 15AppleMacRumors\r\n*Category:\r\n Technology *SourceMacRumors ,medium.com/@mingchikuo ,zelbo.nyc\r\niPhone 15\r\nAppleiPhoneMacRumorsiPhone 15\r\niPhone 15/iPhone 15 Plus\r\n<ul><li>Main Camera: 48-megap… [+861 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Googlewatchblog.de"
            },
            "author": "Jens",
            "title": "Wo bleibt Android 14? Google hat den Release wohl auf Oktober verschoben – es gibt Sicherheitsprobleme",
            "description": "Google hat den Release von Android 14 gestern wohl sehr kurzfristig abgesagt und auf Anfang Oktober verschoben. Es dürfte nun parallel zur Pixel 8-Präsentation angekündigt werden.Wo bleibt Android 14? Google hat den Release wohl auf Oktober verschoben – es gi…",
            "url": "https://www.googlewatchblog.de/?p=209658",
            "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/android-14-logo.jpg",
            "publishedAt": "2023-09-06T05:00:27Z",
            "content": "Wäre alles nach Plan verlaufen, hätte Google gestern Abend die finale Version von Android 14 veröffentlicht und noch am selben Abend mit dem Rollout auf die Pixel-Smartphones begonnen. Doch wie jetzt… [+3739 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livedoor.biz"
            },
            "author": "news4vip2",
            "title": "【これマジ？】Apple、3～6万円の格安Macを開発中か・・・！？",
            "description": "1: エムトリシタビン(長野県) [US] 2023/09/05(火) 20:53:42.36 ID:E3XYoq6t0● BE:323057825-PLT(13000)\n sssp://img.5ch.net/premium/3755621.gif 現在、Chromebookは教育分野において大きな影響力を持つデバイスとなりましたが、最新の報告によればAppleがChromebookを...",
            "url": "http://news4vip.livedoor.biz/archives/52502898.html",
            "urlToImage": "https://livedoor.blogimg.jp/news4vip2/imgs/8/c/8c498b88-s.png",
            "publishedAt": "2023-09-06T01:30:49Z",
            "content": "sssp://img.5ch.net/premium/3755621.gif ChromebookAppleChromebookMacBook DigitimesApple MacBook Chromebook MacBookMacBook AirMacBook Pro \r\nApple \r\nApple2024 \r\nChromebookApple 2025(NEXT GIGA) \r\n36(1503… [+96 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The New Republic"
            },
            "author": "Matt Ford",
            "title": "How Alabama Plans to Beat the Supreme Court at Its Own Game",
            "description": "A federal court in Alabama threw out the state’s latest map for congressional districts on Tuesday, ruling that the state legislature had violated the Voting Rights Act of 1965, or VRA, by refusing to draw a second majority-Black district. The special three-j…",
            "url": "https://newrepublic.com/article/175388/alabama-voting-rights-defy-supreme",
            "urlToImage": "https://images.newrepublic.com/46aba8e86738f19c2e405e4c89084d7286cb49db.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
            "publishedAt": "2023-09-06T10:00:00Z",
            "content": "Following the U.S. Supreme Court order, I called the Alabama Legislature into a special session to readdress our congressional map, Governor Kay Ivey said after signing the new maps into law in July.… [+1254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "WELT",
            "title": "Fachkräftemangel wird deutlich größeres Problem als das Virus",
            "description": "Bei einer Online-Pressekonferenz klären Virologinnen, Infektiologen und Mediziner über die kommenden Monate mit Covid-19 auf. Wer braucht eine Impfung? Werden uns neue Varianten gefährlich? Und wo könnte es Engpässe geben?",
            "url": "https://www.welt.de/wissenschaft/article247321452/Corona-Herbst-2023-Fachkraeftemangel-wird-groesseres-Problem-als-Corona-als-das-Virus.html",
            "urlToImage": "https://img.welt.de/img/out-of-home/wissen/mobile247321622/4981350267-ci16x9-w1200/Altenheim.jpg",
            "publishedAt": "2023-09-06T09:31:35Z",
            "content": "Für den Herbst und Winter rechnen deutsche Corona-Expertinnen und Experten wieder vermehrt mit Ansteckungen und halten wegen Personalmangels auch Engpässe im Gesundheitssystem für möglich. Ich rechne… [+3360 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "WELT",
            "title": "Sommer, Sonne und Gesundheitsprobleme",
            "description": "Mit zunehmender Hitze nehmen Allergien zu, die Belastung durch Luftverschmutzung und UV-Strahlung wird stärker, und Patienten müssen mit mehr Nebenwirkungen rechnen, wenn sie bestimmte Medikamente einnehmen. Das geht aus einem neuen RKI-Bericht hervor.",
            "url": "https://www.welt.de/wissenschaft/article247321778/RKI-Bericht-Bei-Hitze-wirken-Medikamente-anders-Allergien-nehmen-zu.html",
            "urlToImage": "https://img.welt.de/img/wissenschaft/mobile247322398/7151355157-ci16x9-w1200/asian-female-thirsty-and-dehydration-drinking-fresh-water-at-summ.jpg",
            "publishedAt": "2023-09-06T10:58:37Z",
            "content": "Bestimmte Medikamente können bei Hitze gefährliche Nebenwirkungen verursachen. Das geht aus einem jetzt veröffentlichten Bericht des Robert Koch-Instituts (RKI) hervor. Besonders betroffen seien Mitt… [+4485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Martin Klemrath",
            "title": "Vier Präsidenten starben, Reagan hatte Glück – und machte später lässige Witze",
            "description": "Am 6. September 1901 wurde William McKinley als dritter US-Präsident das Opfer eines tödlichen Mordanschlags. Es sollte nicht das letzte Attentat auf einen US-Staatschef bleiben. Ronald Reagan entging nur knapp dem Tod – und bewies bei späteren Vorfällen unge…",
            "url": "https://www.welt.de/geschichte/article247050510/Attentate-auf-US-Praesidenten-Vier-starben-Reagan-hatte-Glueck-und-blieb-gelassen.html",
            "urlToImage": "https://img.welt.de/img/geschichte/mobile247052698/3311355997-ci16x9-w1200/Cover-illustration-of-assassination-of-President-McKinley-by-anar.jpg",
            "publishedAt": "2023-09-06T05:46:33Z",
            "content": "Das Amt des US-Präsidenten wird nicht ohne Grund häufig als schwierigster Job der Welt bezeichnet. Laut Verfassung ist er Staatsoberhaupt, Regierungschef und Oberbefehlshaber der Streitkräfte in Pers… [+5371 chars]"
        },
        {
            "source": {
                "id": "la-repubblica",
                "name": "La Repubblica"
            },
            "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
            "title": "La stretta Ue su Big Tech: designati i sei colossi che devono rispettare gli obblighi del Digital Markets Act",
            "description": "Si tratta di Alphabet, Amazon, Apple, ByteDance, Meta e Microsoft",
            "url": "https://www.repubblica.it/economia/2023/09/06/news/la_stretta_ue_su_big_tech_designati_i_sei_colossi_che_devono_rispettare_gli_obblighi_del_digital_markets_act-413502612/",
            "urlToImage": "https://www.repstatic.it/content/nazionale/img/2023/09/06/122528717-599ff891-59ab-4dbf-88c8-48a00ab2e496.jpg",
            "publishedAt": "2023-09-06T10:25:41Z",
            "content": "Punto di svolta nella stretta europea sullattività di Big Tech. La Commissione ha annunciato oggi di avere designato per la prima volta sei gatekeeper ai sensi del Digital Markets Act: si tratta di A… [+4593 chars]"
        },
        {
            "source": {
                "id": "la-repubblica",
                "name": "La Repubblica"
            },
            "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
            "title": "Smart e il primo Suv coupé. La sorpresa #3 conquista perché “anticonvenzionale”",
            "description": "Al Salone tedesco presentato il nuovo modello. Dirk Adelmann, Ceo di smart Europe: “essere anticonvenzionali è sempre stato parte dell'identità di Smart.",
            "url": "https://www.repubblica.it/motori/2023/09/06/news/smart_e_il_primo_suv_coupe_la_sorpresa_3_conquista_perche_anticonvenzionale-413462938/",
            "urlToImage": "https://www.repstatic.it/content/nazionale/img/2023/09/06/072154882-48bbe58c-edd3-433e-904e-d59874dd4b29.jpg",
            "publishedAt": "2023-09-06T05:22:04Z",
            "content": "MONACO Dopo 25 anni di storia, arriva il primo Suv coupé firmato Smart: un percorso che continua allinsegna dellinnovazione, del design e della sportività.Con Smart #3, stiamo ampliando la nostra off… [+2801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techbang.com"
            },
            "author": "ifanr",
            "title": "Apple Watch 史上最大的一次升級，Apple Watch X 要來了",
            "description": "Apple Watch 史上最大的一次升級，要來了\n\n\n2014 年 9 月 9 日，庫克(Tim Cook)在加州庫比提諾的弗林特中心，發佈Apple Watch，這是第一款賈伯斯沒有參與的重要新品，對於蘋果和庫克，Apple Watch 的意義絲毫不亞於同場發佈的 iPhone 6，發布會蔓延著要翻開後賈伯斯時代新篇章的決心。\r\n\n\r\n\n回溯到1984 年同樣在弗林特中心，29歲的賈伯斯首次將 Macintosh電腦展示給世人，蘋果選擇這裡開啟 Apple Watch 的首秀，作為下一段偉大曆程的起點。App…",
            "url": "https://www.techbang.com/posts/109134-the-biggest-upgrade-in-apple-watch-history-is-coming",
            "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/109134/original/6d6dd3a7cd491429e81da4dc1f40d576.jpg?1693473993",
            "publishedAt": "2023-09-06T06:30:00Z",
            "content": "2014 9 9 (Tim Cook)Apple WatchApple Watch iPhone 6\r\n1984 29 Macintosh Apple Watch Apple Watch One More Thing iPhone \r\nApple Watch One More Thing iPhone XM1 Mac Vision Pro\r\n Apple Watch 2007 \r\nApple W… [+1581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techbang.com"
            },
            "author": "ifanr",
            "title": "Pixel 8 Pro 真機多圖曝光，放棄曲面螢幕、新增醫療級感測器",
            "description": "Pixel 8 Pro 真機曝光 ，新增了一個大家都沒有的感測器\n\n\n每年八到十月是手機最熱鬧的時候，三星(Samsung)、華為(Huwaii)和蘋果(Apple)皆在此發佈年度旗艦機型。還有另一款手機，他的關注度和銷量都欠佳，也將緊接著發佈那就是 Google Pixel 系列。\r\n\n早在 7 月初，國外論壇Reddit 上曾發佈了兩張 Pixel 新旗艦照片，雖然這些照片很快就被刪除，從這兩張照片可以清晰的看到新機型的正反面。即使這兩張照片沒有明確標註機型，但根據後鏡的規格，Pixel 8 Pro的機率很大…",
            "url": "https://www.techbang.com/posts/109138-pixel-8-pro-real-machine-exposure-a-new-sensor-that-no-one-has",
            "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/109138/original/e1980ec4aad6a56f8278270597333315.jpg?1693293013",
            "publishedAt": "2023-09-06T07:30:00Z",
            "content": "(Samsung)(Huwaii)(Apple) Google Pixel \r\n 7 Reddit Pixel Pixel 8 Pro\r\nPixel 7 Pro Pixel 8 Pro\r\nMLX90632Melexis 2019 Pixel 8 ProPixel Watch \r\nPixel 8 Pro Google\r\nPixel 8PixelPixel 4 j\r\nGoogle (Long Exp… [+250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Trendencias.com"
            },
            "author": "Joel Calata",
            "title": "Grises y con aire rebelde: así son los vaqueros de Easy Wear que llevarás en otoño están a menos de la mitad de su precio en El Corte Inglés",
            "description": "Los vaqueros desgastados para hombre son una prenda de vestir popular que ha estado en tendencia durante años, si bien se caracterizan por sus agujeros y deshilachados en diferentes lugares, como las rodillas, lo cierto es que se han vuelto en la gran apuesta…",
            "url": "https://www.trendencias.com/hombres/grises-aire-rebelde-asi-vaqueros-easy-wear-que-llevaras-otono-estan-a-mitad-su-precio-corte-ingles",
            "urlToImage": "https://i.blogs.es/b3c445/grises-y-con-aire-rebelde-asi-son-los-vaqueros-de-easy-wear-que-llevaras-en-otono-estan-a-menos-de-la-mitad-de-su-precio-en-el-corte-ingles/840_560.jpeg",
            "publishedAt": "2023-09-06T09:01:40Z",
            "content": "Los vaqueros desgastados para hombre son una prenda de vestir popular que ha estado en tendencia durante años, si bien se caracterizan por sus agujeros y deshilachados en diferentes lugares, como las… [+2473 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Basicthinking.de"
            },
            "author": "Fabian Peters",
            "title": "IFA 2023: Mit neuem Konzept zurück zu alter Strahlkraft?",
            "description": "Mit neuem Konzept und unter neuer Leitung sehnte sich die IFA 2023 in diesem Jahr zurück nach ihrer alten Strahlkraft. Die Veranstalter zogen bereits eine positive Bilanz. Doch es gab auch Kritik. Ein persönlicher Erfahrungsbericht.  Ein grauer Roboterhund lä…",
            "url": "https://www.basicthinking.de/blog/2023/09/06/ifa-2023/",
            "urlToImage": "https://www.basicthinking.de/blog/wp-content/uploads/2023/09/ifa-2023.jpg",
            "publishedAt": "2023-09-06T11:00:48Z",
            "content": "Mit neuem Konzept und unter neuer Leitung sehnte sich die IFA 2023 in diesem Jahr zurück nach ihrer alten Strahlkraft. Die Veranstalter zogen bereits eine positive Bilanz. Doch es gab auch Kritik. Ei… [+4826 chars]"
        },
        {
            "source": {
                "id": "marca",
                "name": "Marca"
            },
            "author": "PABLO VILLA",
            "title": "\"La salida de Vilda es insuficiente para que vuelvan las jugadoras\"",
            "description": "Jorge Vilda ya es historia de la selección femenina de fútbol. Ocho años en los que España ha jugado tres Eurocopas y tres Mundiales y que acabó de forma histórica en Sidney con la",
            "url": "https://www.marca.com/radio/marca-daily/2023/09/06/64f7bbe322601d75528b4591.html",
            "urlToImage": "https://phantom-marca.unidadeditorial.es/3f530dbda9b350659791c7b06e047aa9/crop/0x0/827x551/f/jpg/assets/multimedia/imagenes/2023/09/06/16939564959167.jpg",
            "publishedAt": "2023-09-06T09:34:32Z",
            "content": "Jorge Vilda ya es historia de la selección femenina de fútbol. Ocho años en los que España ha jugado tres Eurocopas y tres Mundiales y que acabó de forma histórica en Sidney con la final disputada el… [+742 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ascii.jp"
            },
            "author": "ASCII",
            "title": "アップル「Apple Arcade」新作配信　「007」原作ゲームなど4タイトル",
            "description": "アップルは9月5日、同社のゲームストリーミングサービス「Apple Arcade」に新作ゲームとして「Cypher 007」「日本の田舎ぐらし」「Junkworld」「マイ・トーキング・アンジェラ2+」の4作品を追加すると発表した。",
            "url": "https://weekly.ascii.jp/elem/000/004/154/4154692/",
            "urlToImage": "https://ascii.jp/img/2023/09/06/3598528/l/a74b091986a11f60.jpg",
            "publishedAt": "2023-09-06T06:45:00Z",
            "content": "94\r\n95Apple ArcadeCypher 007Junkworld2+4\r\nCypher 007929\r\nCypher 007\r\nCypher 007007007\r\n915\r\nJunkworld922\r\nJunkworld\r\nJunkworld\r\n2+98\r\n2+\r\n2+Talking Tom &amp; Friends \r\n94Hello Kitty Island AdventureJ… [+70 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Corriere.it"
            },
            "author": "Gian Luca Bauzano",
            "title": "Linda Evangelista: «Ho avuto due tumori al seno in cinque anni»",
            "description": "La top model a un anno di distanza dalla storica cover in cui ritornava alla ribalta dopo il disastroso intervento chirurgico rilascia un’intervista con il drammatico annuncio",
            "url": "https://www.corriere.it/moda/23_settembre_06/linda-evangelista-ho-avuto-due-tumori-seno-cinque-anni-2324f026-4c88-11ee-ba13-a63742c0d94b.shtml",
            "urlToImage": "https://images2.corriereobjects.it/methode_image/socialshare/2023/09/06/0c3528da-4c8e-11ee-ba13-a63742c0d94b.jpg",
            "publishedAt": "2023-09-06T09:27:38Z",
            "content": "di Gian Luca BauzanoLa top model a un anno di distanza dalla storica cover in cui ritornava alla ribalta dopo il disastroso intervento chirurgico rilascia un’intervista con il drammatico annuncio \r\nP… [+3545 chars]"
        }
    ],
      loading: false,
      searchQuery: '', 
      filteredArticles: [], 
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.setState({ loading: true });

    fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-09-10&sortBy=popularity&apiKey=76a6b07399f7453898a293eda62e54cb')
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data.articles,
          loading: false,
          filteredArticles: data.articles, 
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  handleSearchChange = event => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      this.filterArticles();
    });
  };

  filterArticles() {
    const { articles, searchQuery } = this.state;
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ filteredArticles });
  }

  render() {
    return (
      <div className='container my-3'>
        {}
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        <div className="row">
          {}
          {this.state.filteredArticles.map(element => (
            <div className="col-md-4" key={element.url}>
              <NewsUpdate
                title={element.title}
                key={element.url}
                newsUrl={element.url}
                description={element.description.slice(0, 100)}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
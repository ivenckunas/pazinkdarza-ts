import carrot from '../assets/images/carrot.webp';
import tomato from '../assets/images/tomato.webp';
import cucumber from '../assets/images/cucumber.webp';
import potato from '../assets/images/potato.webp';
import pumpkin from '../assets/images/pumpkin.webp';
import peas from '../assets/images/peas.webp';
import radish from '../assets/images/radish.webp';
import {Veg} from '../Context/MainContext';

const dataArr: Veg[] = [
	{
		id: 0,
		pixelImage: carrot,
		name: 'Morka',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm storio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg'],
	},
	{
		id: 1,
		pixelImage: tomato,
		name: 'Pomidoras',
		type: 'Daržovė',
		desc: 'Viena populiariausių daržovių pasaulyje. Lietuvoje - tai taip pat viena mėgstamiausių ir labiausiai vertinamų daržovių. Nors biologine prasme pomidorai yra uogos tipo vaisiai, paprastumo dėlei kasdieniniame kontekste jie priskiriami daržovėms. Lietuvoje pomidorai dažniausiai auginami šiltnamiuose, nors yra veislių, kurioms auginimui lauke kuo puikiausiai tinka lietuviškas klimatas. Norint sėkmingai auginti pomidorus ir gauti gausų derlių būtina užtikrinti optimalias augimo sąlygas ir subalansuotą mitybą.',
		soil: 'Lauke auginami pomidorai geriausiai dera lengvose, derlingose struktūringose dirvose su lengvu podirviu. Tokiose dirvose augalų šaknims pakanka oro, jos būna šiltesnės, jose daugiau mikroorganizmų. Dirva turi būti silpnai rūgšti (pH (pH 6,0-5,6).',
		sowing: 'Pomidorai sodinami praėjus šalnoms. Nereikia skubėti sodinti anksčiau, nes nespėję prigyti daigai nukenčia nuo šalnų, o kartais ir žūva. Daigai sodinami su žiedų butonais, kad iki žydėjimo pradžios gerai prigytų. Lysvėse pomidorai sodinami dviem eilėmis po 60cm tarp eilučių ir 40cm eilutėse tarp augalų, paliekant 30 cm nuo eilučių šonų iki lysvės pakraščio, taip pat 30cm tarp lysvių.',
		caring: 'Daigams prigijus ir vėliau augalai tręšiami papildomai. Kad pomidorų lapai, stiebai ir šaknų sistema geriau augtų ir vystytųsi, iš pradžių tręšiama azoto trąšomis. Pražydus pomidorams, kad geriau megztų vaisius, daugiau duodama fosforo ir kalio trąšų, kurios skatina ir šaknų vystymąasi. Ankstyvą ir gerą derlių duoda vienstiebiai pomidorai. Tokį augalą galima suformuoti šalinant papildomus stiebus ir pažastinius ūglius. Vienstiebiai pomidorai greitai auga ir vystosi, žiedadulkės anksčiau subręsta, geriau mezga ir gaunamas ankstyvesnis derlius. Vaisiai būna stambesni ir geresnio skonio. Kai sausa, pomidorai lasitomi gausiai, bet retai. Palaisčius dirvą apie augalus naudinga mulčiuoti arba apkaupti žeme.',
		harvesting: 'Vaisiai skinami, kai pradeda nokti. Geriausia skinti vos raustančius vaisius ir laikyti vėsioje(2-4°C) bei sausoje vietoje.',
		greenhouse: '',
		images: ['https://images.pexels.com/photos/5561311/pexels-photo-5561311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
	},
	{
		id: 2,
		pixelImage: cucumber,
		name: 'Agurkas',
		type: 'Daržovė',
		desc: 'Vienametės daržovės. Priklauso moliūginių (Cucurbitaceae) šeimos Cucumis genčiai. Savaime auga Afrikoje, Indijoje. Žinoma apie 30 rūšių. Labiausiai paplitęs paprastasis agurkas (Cucumis sativus). Kilęs iš Indijos, kur kaip daržovė augintas jau trečiame tūkstantmetyje prieš Kristų. Stiebas šliaužiantis arba lipantis, 0,5–2 m ilgio. Lapai penkiaskiaučiai, ilgakočiai, plaukuoti. Žiedai geltoni, daugiausia vienalyčiai, pavieniai.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://images.pexels.com/photos/9020085/pexels-photo-9020085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
	},
	{
		id: 3,
		pixelImage: potato,
		name: 'Bulvė',
		type: 'Daržovė',
		desc: 'Žolinis daugiametis augalas su požeminiais pakitusiais stiebais - gumbais. Bulvių keras susideda iš 4-8 antžeminių stiebų (bulvienojų). Stiebai 20-150 cm aukščio, statūs, šakoti. Lapai plunksniškai karpyti. Žiedai balti, violetiniai, susitelkę j žiedynus - kekes. Bulvės auginamos laukuose, daržuose, soduose visoje Lietuvoje. Augi­nama įvairios jų veislės, kurių gumbai esti balti, gelsvi, rausvi, violetiniai; įvairuoja ir gumbo dydis. Bulvės žydi birželio-rugpjūčio mėn. Kasamos vasarą arba rudenį (tai priklauso nuo veislės). Apie 80-85% bulvių gumbų sausųjų medžiagų sudaro krakmolas. Bulvių gumbuose yra C, Bi, B2, PP ir kt. vitaminų, mikroelementų, amino rūgščių.',
		soil: 'Anksti sudygusios bulvės gali nukentėti nuo pavasario šalnų, todėl sodinamos lengvose dirvose, aukštesnėse vietose, dar geriau - nuolaidesnėse į pietų pusę. Dirva turi būti puri, turinti daug maisto medžiagų. Bulvės mėgsta šviesą, todėl joms reikia saulėtos vietos. Jos nesodinamos po pomidorų ar kitų bulvinių šeimos augalų.',
		sowing: 'Parinkus tinkamą vietą, ankstyvąsias bulves geriausia sodinti balandžio antroje pusėje. Nesudygusioms bulvėms trumpalaikis atšalimas nepavojingas, o sudygusias bulves nuo pavasario šalnų galima apsaugoti kaupimu. Laukiant stipresnių šalnų galima kaupti net užberiant lapais. Patariama auginti vagomis, taip prie šaknų geriau prieina oras, dirva geriau įšyla. Sodinami tik sveiki, sveriantys ne mažiau kaip 80-100g. gumbai. Stambesni gumbai turi daugiau atsarginių maisto medžiagų, iš kurių išauga stipresni daigai. Ankstyvąsias bulves geriausia sodinti paliekant 60cm pločio tarpueilius ir 30cm tarp augalų. Ankstyvąsias bulves reikia sodinti negiliai, priemolio dirvose, 4cm gyliu, o lengvose priesmėlio dirvose - giliau - 7-8cm gyliu.',
		caring: 'Po kiekvieno lietaus, iki bulvėms sudygstant, bent geležiniu grėbliu reikia suardyti dirvožemio paviršiuje susidariusią plutą. Bulvėms sudygus tarpueiliams purenti labai tinka rankiniai rotaciniai purentuvai. Jais išpurenama dirva ir sunaikinamos piktžolės. Pirmą kartą bulves reikia kaupti, kai jos yra 8-10cm aukščio, o antrą kartą 15-20cm aukščio. Kaupiant sekliai pasodintas bulves, padaromos aukštesnės vagos, kad bulvės galėtų normaliai augti ir vystytis.',
		harvesting: 'Ankstyvam vartojimui bulves kaskime ne iš eilės, o kas antrą ar trečią kerą. Tada likusieji geriau augs. Visos bulvės pradedamos kasti tik subrendusios - rugsėjo menesį. Nuvytus bulvienojams bulviakasio neatidėliokime, nes, prasidėjus lietingiems orams nuo lapų ligos užkratas pateks ant gumbų ir bulvės blogai laikysis. Kasdami iš karto bulves rūšiuokime. Į vieną krepšį dėkime stambius ir vidutinius, o į kitą - smulkius ir mechaniškai pažeistus gumbus. Sumlkiais laikomi gumbai, kurių skersmuo mažesnis kaip 3cm.',
		images: ['https://images.pexels.com/photos/4110476/pexels-photo-4110476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://www.gfloutdoors.com/wp-content/uploads/2021/04/Growing-Potatoes.jpg'],
	},
	{
		id: 4,
		pixelImage: pumpkin,
		name: 'Moliūgas',
		type: 'Daržovė',
		desc: 'Moliūgai kilę iš Vidurinės ir Pietų Amerikos. Jų yra daug rūšių. Kai kurių veislių vaisiai užauga labai dideli, net iki 100kg. Meksikos gyventojai moliūgus valgė jau 3-ame tūkstantmetyje prieš mūsų erą. Moliūgai - mažai kaloringa daržovė. Į vaisiaus minkštimo sudėtį įeina 92% vandens, yra curkaus, kalio, kalcio, magnio ir geležies druskų, vitaminų C, B1, B2, PP ir provitamino A.',
		soil: 'Moliūgai mėgsta šilumą, todėl jiems reikia parinkti greit įšylančią, apsaugotą nuo vėjų dirvą. Moliūgams reikia daug drėgmės ir trąšios žemės.',
		sowing: 'Sėjama 70x70cm atstumu lizdiniu būdu(po 2-3 sėklas). Sėklos įterpiamos 5cm gyliu. Sudygusios, kai pasirodo pirmas tikrasis lapas, moliūgus išretinkime, palikdami po vieną augalą. Laistykime mažiau negu agurkus.',
		caring: 'Kai susiformuoja 1-2 tikrieji lapai, retinama, lizde paliekant po vieną stipriausią augalą. Išretinti moliūgai patręšiami. Moliūgai labai reiklūs drėgmei, todėl, kai dirva sausa, reikia laistyti. Kol moliūgų lapai užskleidžia dirvą, reikia purenti tarpueilius, naikinti piktžoles. Stambesni moliūgų vaisiai užauga, kai ant vieno augalo paliekama augti ne daugiau kaip 3-4 vaisiai. Norint užauginti labai stambius vaisius, ant augalo paliekama tik 1-2 vaisiai, o kitos vaisių užuomazgos šalinamos, žiedams neišsiskleidus. Vaisiai greičiau auga, kai stiebai, ant kurių auga vaisiai, sutrumpinami virš vaisiaus paliekant 4-6 lapus. Išpjaunami ir šoniniai stiebai.',
		harvesting: 'Moliūgų vaisiai imami, kai jie esti veislei būdingos spalvos ir dydžio. Vaisiai pjaunami su 10-15cm koteliu, nes be jo blogiau laikosi. Visą derlių reikia nuimti prieš šalnas. Nevisiškai subrendusius moliūgų vaisius 2-3 mėnesius galima išlaikyti vėdinamoje patalpoje, kurioje yra 3°C temperatūroje ir 60-75% santykinė oro drėgmė.',
		images: ['https://www.harrisseeds.com/cdn/shop/articles/pumpkin_blog_header_1024x1024.jpg?v=1659370148', 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2019/11/a-bunch-of-pumpkins-in-a-box.jpg?w=1155&h=1734'],
	},
	{
		id: 5,
		pixelImage: peas,
		name: 'Žirniai',
		type: 'Daržovė',
		desc: 'Ankštiniai augalai, kurie Lietuvoje pradėti auginti prieš 400m. Juos yra cukraus, krakmolo, azotinių medžiagų, celiuliozės, vitaminų: C, PP, B1, B2, karotino. Baltymų juose yra ne mažiau negu mėsoje, o svarbiausia, kad juose yra žmogaus organizmui labai reikalingų aminorūgščių.',
		soil: 'Auginimo sąlygoms žirniai nereiklūs, tačiau nemėgsta rūgščių dirvų.',
		sowing: 'Sėjami anksti pavasarį, nes vėliau pasėjus puola kenkėjai. Sėjami 5-6cm gyliu, Pradeda dygti esant 4-8°C temperatūrai, o lapai ir stiebai pakenčia šalnas iki 6°C. Darže žirnius geriausia sėti išilgai lysvės dviem eilėmism paliekant 10cm atstumą nuo kraštų.',
		caring: 'Kad žirniai augdami neišgultų, lysvėje iš vidaus pusės susmeikime atramas. Pirmiau, jeigu reikia, išretinkime išravėkime ir supurenkime tarpus. Retindami palikime tarp augalų 13-15cm tarpus.',
		harvesting: 'Skinami kai ankštis yra sultinga, o žirneliai minkšti.',
		images: ['https://www.almanac.com/sites/default/files/images/pea%20plant%20StanRohrer%20GettyImages.jpg', 'https://styla-prod-us.imgix.net/b7fc887a-f0c4-4ca7-b83d-a7c7cd325b61/1623016578803_03e5ba09-8228-45da-87a9-1a013acdb776?auto=format%2Ccompress&w=1920&h=1371&fit=original'],
	},
	{
		id: 6,
		pixelImage: radish,
		name: 'Ridikėliai',
		type: 'Daržovė',
		desc: 'Vienmetės šakniavaisės daržovės. Jų yra daug įvairių formų ir spalvų, todėl labai tinka maisto patiekalams ruošti. Dažniausiai vartojami ruošiant salotas. Ridikėliai vitaminų turi daugiau negu ridikai, jų skonis švelnesnis. Jie labai greitai užauga. Tai pirmosios pavasario daržovės.',
		soil: 'Dirva turi būti derlinga, puri, pakankamai drėgna.',
		sowing: 'Ridikėliai sėjami 1.5-2cm gyliu. Sėjant tarp eilučių paliekami 10-15cm tarpai. Sudygę augalai retinami, paliekami kas 2-3cm. Kad užaugtų geros kokybės šakniavaisiai, ridikėlius kiekvieną savaitę laistykime(į 1m² ploto skirkime 10l vandens).',
		caring: 'Pradėjus formuotis šakniavaisiams, purenkime tarpueilius ir ridikėlius apkaupkime. Ridikėliai atsparūs šalčiui, sudygę pakenčia 2-3°C šalnas, o užaugę - trumpalaikį atšalimą iki 5-6°C šalčio.',
		harvesting: 'Užaugę ridikėliai raunami ne iš karto, o atrinktinai.',
		images: ['https://gardeningtips.in/wp-content/uploads/2019/07/radishes-1141011_960_720.jpg', 'https://images.squarespace-cdn.com/content/v1/59bc4b7f017db254b3b5b7f7/1591215015097-GIETJ2CYZMEAMHBWESK5/image-asset.jpeg'],
	},
];

export default dataArr;

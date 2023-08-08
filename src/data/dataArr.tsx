import carrot from '../assets/images/carrot.png';
import tomato from '../assets/images/tomato.png';
import cucumber from '../assets/images/cucumber.png';
import potato from '../assets/images/potato.png';
import pumpkin from '../assets/images/pumpkin.png';
import peas from '../assets/images/peas.png';
import radish from '../assets/images/radish.png';

type Veg = {
	pixelImage: string;
	name: string;
	type: string;
	desc: string;
	soil: string;
	sowing: string;
	caring: string;
	harvesting: string;
	greenhouse?: string;
	images: string[];
}[];

const dataArr: Veg = [
	{
		pixelImage: carrot,
		name: 'Morka',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: tomato,
		name: 'Pomidoras',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Lauke auginami pomidorai geriausiai dera lengvose, derlingose struktūringose dirvose su lengvu podirviu. Tokiose dirvose augalų šaknims pakanka oro, jos būna šiltesnės, jose daugiau mikroorganizmų. Dirva turi būti silpnai rūgšti (pH (pH 6,0-5,6).',
		sowing: 'Pomidorai sodinami praėjus šalnoms. Nereikia skubėti sodinti anksčiau, nes nespėję prigyti daigai nukenčia nuo šalnų, o kartais ir žūva. Daigai sodinami su žiedų butonais, kad iki žydėjimo pradžios gerai prigytų. Lysvėse pomidorai sodinami dviem eilėmis po 60cm tarp eilučių ir 40cm eilutėse tarp augalų, paliekant 30 cm nuo eilučių šonų iki lysvės pakraščio, taip pat 30cm tarp lysvių.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		greenhouse: '',
		images: ['https://images.pexels.com/photos/5561311/pexels-photo-5561311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/9367465/pexels-photo-9367465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/965740/pexels-photo-965740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
	},
	{
		pixelImage: cucumber,
		name: 'Agurkas',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://images.pexels.com/photos/2775838/pexels-photo-2775838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/9020085/pexels-photo-9020085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/13622740/pexels-photo-13622740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
	},
	{
		pixelImage: potato,
		name: 'Bulvė',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://images.pexels.com/photos/4110476/pexels-photo-4110476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://www.almanac.com/sites/default/files/images/potato%20plants%20Avalon_Studio%20GettyImages.jpg', 'https://www.gfloutdoors.com/wp-content/uploads/2021/04/Growing-Potatoes.jpg', 'https://www.allaboutgardening.com/wp-content/uploads/2022/03/Grow-Potatoes-1200x667.jpg'],
	},
	{
		pixelImage: pumpkin,
		name: 'Moliūgas',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://plantvillage-production-new.s3.amazonaws.com/image/4733/file/default-9d34239e8827213a35e508251276a744.jpg', 'https://www.harrisseeds.com/cdn/shop/articles/pumpkin_blog_header_1024x1024.jpg?v=1659370148', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB4xXk2btbsUYKg18Epo58QBe-oIT0kK7RA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPtrRnUEp_TEI-HouF30qpk9kGWRpGrB91Q&usqp=CAU'],
	},
	{
		pixelImage: peas,
		name: 'Žirniai',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://www.almanac.com/sites/default/files/images/pea%20plant%20StanRohrer%20GettyImages.jpg', 'https://styla-prod-us.imgix.net/b7fc887a-f0c4-4ca7-b83d-a7c7cd325b61/1623016578803_03e5ba09-8228-45da-87a9-1a013acdb776?auto=format%2Ccompress&w=1920&h=1371&fit=original', 'https://harvesttotable.com/wp-content/uploads/2017/01/Pea-bigstock-Small-pea-plant-18673091-1024x1004.jpg', 'https://ferrymorse.com/cdn/shop/products/Pea-Little-Marvel-Vegetable-Ferry-Morse.jpg?v=1610028928'],
	},
	{
		pixelImage: radish,
		name: 'Ridikėliai',
		type: 'Daržovė',
		desc: 'Valgomoji morka, kilusi iš laukinės, seniausiai paplitusi iš visų šakniavaisinių daržovių. Dvimetis 30-100cm aukščio žolinis augalas. Pirmaisiais metais iš sėklų išauga lapų skrotelė ir sultingas šakniavaisis, kuris, priklausomai nuo veislės, gali būti įvairios spalvos, formos bei skonio. Stiebas stačias, briaunotas, viršutinė dalis šakota. Lapai pailgi, plunksniškai du ar tris kartus suskaldyti. Žiedynas- sudėtinis skėtis. Žiedai balti, rožiniai, rečiau gelsvi. Žydi antraisiais metais, birželio-rugpjūčio, o vaisiai subręsta rugpjūčio-rugsėjo mėnesiais.',
		soil: 'Morkos geriausiai auga lengvose ir vidutinio sunkumo dirvose. Geriausiai morkoms tinka priesmėlio ar lengvo priemolio, humusingos, su giliu ariamuoju sluoksniu (iki 30cm) dirvos. Sunkaus priemolio, nederlinguose ar akmenuotuose, taip pat užmirkusiuose dirvožemiuose morkų šakniavaisiai išauga negražios formos, išsikraipę. Geriausia morkoms skirtą dirvą tręšti rudenį mineralinėmis trąšomis. Stenkitės morkų nepertręšti azoto trąšomis, nes pablogėja šakniavaisių skonis ir jie praščiau laikosi.',
		sowing: 'Morkos sėjamos keliais terminais. Norint labai anksti (birželio pradžioje) turėti šviežių morkų, jas galima pasėti iš rudens. Parenkama lengva, nepiktžolėta dirva, spalio mėnesį sukasama lysvė ir joje skersai kas 15-20 cm įrėžiami grioveliai. Pradėjus pastoviai šalti (lapkričio pabaigoje ar gruodžio pradžioje), ant sušalusios dirvos į griovelius pasėjamos morkos ir nestorai (1,5-2 cm) užberiama durpėmis ar šiaip lengva žeme (žemių krūvelę reikia iš anksto pridengti medžių lapais, kad neperšaltų). Anksti pavasarį, kai dirvos temperatura pakyla iki 5-8°C, morkos sudygsta. Laikymui netinka, jas reikia suvartoti iki rudens. Antras sėjos terminas pavasarį - ievai sužaliavus (kai tik pradžiūsta dirva). Tuo laiku sėjamos morkos, kurios bus vartojamos maistui vasarą ir rudenį. Žiemai laikomas geriausiai sėti gegužės antroje pusėje. Morkos sėjamos į lysves 20 cm eilutė nuo eilutės ar eilėmis lygiame lauke 30-35 cm tarpueiliais. Morkos sėjamos netankiai ir labai negiliai. Jei sėklos daigios (70% ir daugiau), 10m2 apsėti reikia apie 5g sėklų. Kad būtų lengviau pasėti, morkų sėklas galima sumaišyti su smėliu ar pjuvenomis. Menkesnio daigumo sėklos sėjamos tankiau. Kaip minėta, morkos sėjamos labai negiliai (0,5-1,5cm gyliu). Per giliai pasėtos jos labai ilgai ir nevienodai dygsta. Pasėjus eilutėse žemė atvirkščiu grėbliu prispaudžiama, kad sėklos geriau prisiglaustų prie žemės.',
		caring: 'Priežiūra. Augančioms morkoms dirva turi būti puri ir nepiktžolėta. Pasėtos morkos sausesniais metais dygsta net keturias savaites. Piktžolės tada greičiau sudygsta ir užgožia bedygstančias morkas. Todėl kartu su morkomis labai gerai įsėti salotų ar ridikėlių. Jie greitai sudygsta ir pasėlį galima anksti išravėti. Morkoms sudygus, reikia purenti tarpueilius ir per visą augimo laiko- tarpį stengtis pasėlį išlaikyti švarų, o tarpueilius purius, tada nereikės mor kų daug kartų ravėti. Sudygusios morkos, kai tik pasirodo tikrieji lapeliai, retinamos taip. kad augalas nuo augalo būtų kas 1,5-2 cm. Per tankiai augusių morkų daug būna netinkamų vartoti šakniavaisių. Morkos labai jautrios drėgmei. Pirmąjį mėnesį, kad augalai gerai past savintų trąšas ir galėtų normaliai augti, reikia daug drėgmės. Jei nėra lie rio, drėgmės reikia mažiau. Jeigu nebūna ilgesnės sausros, dirvoje drėgmės taus, pasėlis gausiai laistomas. Kai morkų šakniavaisis esti 1,5-2 cm sto užtenka. Morkos labai blogai auga užmirkusiose dirvose, kai gruntinis vanduo yra labai aukštai. Be to, po liūčių stovintis paviršinis vanduo gall per 2-3 dienas sunaikinti pasėlį.',
		harvesting: 'Kuo vėliau kasami morkų šakniavaisiai, tuo daugiau sukaupia cukrų ir karotino, geriau laikosi žiemą. Tačiau derlių reikia nuimti iki šalnų, nes pašalę, nes pašalę šaknavaisiai žiemą blogiau laikosi. Geriausia morkas kasti spalio pradžioje. Nukastos morkos tuojau pat yra rūšiuojamos, nusukami ar nupjaunami lapai. Laikymui atrenkami užaugę, sveiki, nesutrūkę, nešakoti šakniavaisiai. Nuimtą derlių laikyti rūsyje. Jeigu to nepavyksta padaryti, geriausia morkas apipilti švariomis žemėmis ir palaikyti iki didesnių šalčių. Morkų šakniavaisiai geriausiai išsilaiko 1-4°C temperatūroje, susluoksniuoti su švariu smėliu.',
		images: ['https://gardeningtips.in/wp-content/uploads/2019/07/radishes-1141011_960_720.jpg', 'https://images.squarespace-cdn.com/content/v1/59bc4b7f017db254b3b5b7f7/1591215015097-GIETJ2CYZMEAMHBWESK5/image-asset.jpeg', 'https://gardenary-data.s3.amazonaws.com/og/g6nugFwwcLpDSpI3DERBhbTc5dPZs0WaWqTnREWA.jpg', 'https://www.gardeningchores.com/wp-content/uploads/2021/07/How-To-Grow-Radishes-In-Your-Garden-From-Seeds-To-Harvest.jpg'],
	},
];

export default dataArr;

import carrot from '../assets/images/carrot.png';
import tomato from '../assets/images/tomato.png';
import cucumber from '../assets/images/cucumber.png';
import potato from '../assets/images/potato.png';
import pumpkin from '../assets/images/pumpkin.png';
import peas from '../assets/images/peas.png';
import radish from '../assets/images/radish.png';

interface Veg {
	pixelImage: string;
	name: string;
	type: string;
	desc: string;
	images: string[];
}

const dataArr: Veg[] = [
	{
		pixelImage: carrot,
		name: 'Morka',
		type: 'Daržovė',
		desc: 'Morka (Daucus) – salierinių (Apiaceae) augalų gentis, kuriai priklauso dvimečiai augalai su plunksniškai suskaldytais lapais ir elipsišku arba kiaušinišku vaisiumi.[1] Žolė, paplitusi Š. Afrikoje, Š. Amerikoje, Pietvakarių Azijoje.Lietuvoje auga viena savaiminė rūšis – paprastoji morka (Daucus carota) ir plačiai auginama valgomoji morka (Daucus carota var. sativa), kuri nuo tipinės formos skiriasi stora, mėsinga, oranžinės ar gelsvos spalvos šaknimi.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: tomato,
		name: 'Pomidoras',
		type: 'Daržovė',
		desc: 'Daržinis augalas, vedantis raudonos (yra veislių vedančių geltonos, juodos) spalvos, mėsingus, sultingus uogos tipo vaisius. Nors biologine prasme pomidorai yra vaisiai, kasdieniniame kontekste priskiriami daržovėms. Pomidorų vaisiai naudojami garnyrams, salotoms, mišrainėms, konservuojami, naudojami gaminant pomidorų kečupą. Pomidorų tėvynė – Pietų Amerika, Andų aukštikalnės. Pradžioje jie auginti Senovės Peru civilizacijų, vėliau pateko į Mezoameriką. Actekai juos vadino nah. tomatl – „išsipūtusiais vaisiais“. Šiuo žodžiu pomidorai dabar vadinami daugelyje pasaulio kalbų. Kas pomidorus atgabeno į Europą nėra žinoma – vieni sako, kad Kortesas, kiti – kad Kolumbas. Europos literatūroje pirmą kartą minimi 1544 m. botaniniame žinyne, kur vadinami pomo d’oro (italų kalba – „auksinis obuolys“). Iš šio žodžio kilo lietuviškas žodis pomidoras. Palaipsniui pomidorai pradėti auginti visame pasaulyje, išvesta įvairių veislių – nuo nedidelių uoginių pomidorų (panašių į augintus Meksikoje) iki sveriančių virš 0,5 kg.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: cucumber,
		name: 'Agurkas',
		type: 'Daržovė',
		desc: 'Šaknis liemeninė, stiebas šliaužiantis. Žiedai vienalyčiai, geltoni. Vaisiai žali, vidutinio dydžio. Augalus apdulkina vabzdžiai, dirbtiniu būdu – žmogus. Nedaugelis veislių augina sėklų neturinčius vaisius be apdulkinimo. Jos gerai tinka šiltnamiams. Dauguma veislių vaisius mezga tik apdulkinus žiedus. Derliui padidinti į agurkų laukus vežami bičių aviliai. Žiedus kartais apdulkina musės. Nepakankamo apdulkinimo požymiai yra nukrentantys ar deformuoti vaisiai. Tik dalinai apdulkintų žiedų vietoje išaugę vaisiai būna nuo stiebo nutolusioje dalyje pabalę. Nors agurkai nėra maistingi, tačiau jie populiarūs nuo senų laikų. Indijoje juos augino dar keletą tūkstančių metų prieš mūsų erą. Šventyklų freskos liudija, kad agurkus žinojo senovės egiptiečiai ir graikai. Iš Viduržemio pajūrio jie pasklido po kitas Europos šalis. Dabar agurkai viena labiausiai paplitusių daržovių. Agurkų veislės pritaikytos skirtingoms auginimo sąlygoms, įvairovė leidžia visur ir įvairiu metų laiku turėti šviežių agurkų. Auginami atvirame grunte, šiltnamiuose, inspektuose. Agurkus galima marinuoti, rauginti, valgyti žalius. Jie tinka šlakų išvalymui. Lietuvoje auginama: Paprastasis agurkas (Cucumis sativus), sėjamasis melionas (Cucumis melo)',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: pumpkin,
		name: 'Moliūgas',
		type: 'Daržovė',
		desc: 'Morka (Daucus) – salierinių (Apiaceae) augalų gentis, kuriai priklauso dvimečiai augalai su plunksniškai suskaldytais lapais ir elipsišku arba kiaušinišku vaisiumi.[1] Žolė, paplitusi Š. Afrikoje, Š. Amerikoje, Pietvakarių Azijoje.Lietuvoje auga viena savaiminė rūšis – paprastoji morka (Daucus carota) ir plačiai auginama valgomoji morka (Daucus carota var. sativa), kuri nuo tipinės formos skiriasi stora, mėsinga, oranžinės ar gelsvos spalvos šaknimi.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: potato,
		name: 'Bulvė',
		type: 'Daržovė',
		desc: 'Daržinis augalas, vedantis raudonos (yra veislių vedančių geltonos, juodos) spalvos, mėsingus, sultingus uogos tipo vaisius. Nors biologine prasme pomidorai yra vaisiai, kasdieniniame kontekste priskiriami daržovėms. Pomidorų vaisiai naudojami garnyrams, salotoms, mišrainėms, konservuojami, naudojami gaminant pomidorų kečupą. Pomidorų tėvynė – Pietų Amerika, Andų aukštikalnės. Pradžioje jie auginti Senovės Peru civilizacijų, vėliau pateko į Mezoameriką. Actekai juos vadino nah. tomatl – „išsipūtusiais vaisiais“. Šiuo žodžiu pomidorai dabar vadinami daugelyje pasaulio kalbų. Kas pomidorus atgabeno į Europą nėra žinoma – vieni sako, kad Kortesas, kiti – kad Kolumbas. Europos literatūroje pirmą kartą minimi 1544 m. botaniniame žinyne, kur vadinami pomo d’oro (italų kalba – „auksinis obuolys“). Iš šio žodžio kilo lietuviškas žodis pomidoras. Palaipsniui pomidorai pradėti auginti visame pasaulyje, išvesta įvairių veislių – nuo nedidelių uoginių pomidorų (panašių į augintus Meksikoje) iki sveriančių virš 0,5 kg.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: peas,
		name: 'Žirneliai',
		type: 'Daržovė',
		desc: 'Daržinis augalas, vedantis raudonos (yra veislių vedančių geltonos, juodos) spalvos, mėsingus, sultingus uogos tipo vaisius. Nors biologine prasme pomidorai yra vaisiai, kasdieniniame kontekste priskiriami daržovėms. Pomidorų vaisiai naudojami garnyrams, salotoms, mišrainėms, konservuojami, naudojami gaminant pomidorų kečupą. Pomidorų tėvynė – Pietų Amerika, Andų aukštikalnės. Pradžioje jie auginti Senovės Peru civilizacijų, vėliau pateko į Mezoameriką. Actekai juos vadino nah. tomatl – „išsipūtusiais vaisiais“. Šiuo žodžiu pomidorai dabar vadinami daugelyje pasaulio kalbų. Kas pomidorus atgabeno į Europą nėra žinoma – vieni sako, kad Kortesas, kiti – kad Kolumbas. Europos literatūroje pirmą kartą minimi 1544 m. botaniniame žinyne, kur vadinami pomo d’oro (italų kalba – „auksinis obuolys“). Iš šio žodžio kilo lietuviškas žodis pomidoras. Palaipsniui pomidorai pradėti auginti visame pasaulyje, išvesta įvairių veislių – nuo nedidelių uoginių pomidorų (panašių į augintus Meksikoje) iki sveriančių virš 0,5 kg.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
	{
		pixelImage: radish,
		name: 'Ridikėliai',
		type: 'Daržovė',
		desc: 'Daržinis augalas, vedantis raudonos (yra veislių vedančių geltonos, juodos) spalvos, mėsingus, sultingus uogos tipo vaisius. Nors biologine prasme pomidorai yra vaisiai, kasdieniniame kontekste priskiriami daržovėms. Pomidorų vaisiai naudojami garnyrams, salotoms, mišrainėms, konservuojami, naudojami gaminant pomidorų kečupą. Pomidorų tėvynė – Pietų Amerika, Andų aukštikalnės. Pradžioje jie auginti Senovės Peru civilizacijų, vėliau pateko į Mezoameriką. Actekai juos vadino nah. tomatl – „išsipūtusiais vaisiais“. Šiuo žodžiu pomidorai dabar vadinami daugelyje pasaulio kalbų. Kas pomidorus atgabeno į Europą nėra žinoma – vieni sako, kad Kortesas, kiti – kad Kolumbas. Europos literatūroje pirmą kartą minimi 1544 m. botaniniame žinyne, kur vadinami pomo d’oro (italų kalba – „auksinis obuolys“). Iš šio žodžio kilo lietuviškas žodis pomidoras. Palaipsniui pomidorai pradėti auginti visame pasaulyje, išvesta įvairių veislių – nuo nedidelių uoginių pomidorų (panašių į augintus Meksikoje) iki sveriančių virš 0,5 kg.',
		images: ['https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-vert.jpg', 'https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-44.jpg', 'https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg', 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/c5790ea5-fc0d-46b6-a092-606ce012856f/ae1d8bd8-ebbf-4bb2-a4d8-12c45e3b0f2d/1280x720/match/image.jpg', 'https://nationaltoday.com/wp-content/uploads/2021/04/Carrot-1200x834.jpg'],
	},
];

export default dataArr;

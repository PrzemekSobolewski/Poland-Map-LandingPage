import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function importAll(r) {
  return r.keys().map(r);
}

const regions = [
  {
    images: importAll(require.context('../assets/images/śląskie/', false, /\.(png|jpe?g|svg)$/)),
    name: "Województwo Śląskie",
    info: {
      '0': "Każdy turysta odnajdzie tu coś dla siebie: góry i górskie kurorty, uzdrowiska, rozbudowane aglomeracje z ośrodkami kultury i rozrywki, a także atrakcje industrialne ze Szlakiem Zabytków Techniki na czele.",
      '1': "Województwo śląskie położone jest w południowej Polsce i graniczy od południa z Czechami i Słowacją, a po stronie polskiej z czterema województwami: opolskim, łódzkim, świętokrzyskim i małopolskim.",
      '2': "Stolicą województwa są Katowice. Śląskie zajmuje obszar o powierzchni ponad 12 300 km² i stanowi województwo o najwyższym stopniu urbanizacji i gęstości zaludnienia w Polsce."
    },
  },
  {
    images: importAll(require.context('../assets/images/opolskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Opolskie',
    info: {
      '0': "Jest najmniejszym województwem w Polsce, ale bogatym kulturowo i pełnym skarbów dla turystów; tutaj każdy znajdzie coś dla siebie – do zwiedzania i wypoczynku.",
      '1': "Województwo opolskie położone jest w południowej Polsce i graniczy od południa z Czechami, a po stronie polskiej z czterema województwami: dolnośląskim, wielkopolskim, łódzkim i śląskim. Stolicą województwa jest Opole. ",
      '2': "Amatorów natury zachwycą jeziora Turawskie, skąd z Opola można dojechać na rowerze, aby żeglować, kitesurfingować, złowić sandacza albo z piaszczystych łach i lagun podglądać królestwo ptaków."
    },
  },
  {
    images: importAll(require.context('../assets/images/wielkopolskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Wielkopolskie',
    info: {
      '0': "To region z wieloma cennymi zabytkami, zamkami i pałacami czy atrakcjami dla miłośników turystyki industrialnej; z historyczną pierwszą stolicą Polski w Gnieźnie.",
      '1': "Województwo wielkopolskie położone jest w środkowo-zachodniej części Polski i graniczy z siedmioma województwami: zachodniopomorskim, pomorskim, kujawsko-pomorskim, łódzkim, opolskim, dolnośląskim i lubuskim.",
      '2': "To region wielkiej historii, gdyż właśnie na tej ziemi „zaczęła” się Polska. Na turystę czekają w nim liczne przygody podczas odkrywania zamków i pałaców, urokliwych miasteczek oraz turystyce wodnej."
    },
  },
  {
    images: importAll(require.context('../assets/images/zachodniopomorskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Zachodniopomorskie',
    info: {
      0: "To nadmorski region pełen wspaniałych przygód z wieloma nadmorskimi kurortami i sławnymi uzdrowiskami, na terenie województwa zlokalizowane są obszary atrakcyjne przyrodniczo.",
      1: "Skosztować kwiaty jadalne, poczuć się Wikingiem, zobaczyć kamienne kręgi, wspiąć się na najwyższą latarnię morską nad polskim Bałtykiem, przejechać się czołgiem – można tylko tutaj!",
      2: "Województwo zachodniopomorskie położone jest w północno-zachodniej Polsce i graniczy od północy z Morzem Bałtyckim, od zachodu z Niemcami, a po stronie polskiej z trzema województwami: pomorskim, wielkopolskim i lubuskim."
    },
  },
  {
    images: importAll(require.context('../assets/images/świętokrzyskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Świętokrzyskie',
    info: {
      0: "To pełne uroku województwo z Górami Świętokrzyskimi i parkiem narodowym (Świętokrzyski). Świętokrzyskie to tradycje pustelników i zakonników, pradawne legendy i dinozaury.",
      1: "Województwo świętokrzyskie położone jest w południowo-wschodniej części Polski i graniczy z sześcioma województwami: mazowieckim, lubelskim, podkarpackim, małopolskim, śląskim i łódzkim.",
      2: "Stolicą województwa są Kielce. Świętokrzyskie zajmuje obszar o powierzchni ponad 11 700 km². Góry Świętokrzyskie stanowią charakterystyczny element krajobrazu regionu świętokrzyskiego."
    },
  },
  {
    images: importAll(require.context('../assets/images/kujawsko-pomorskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Kujawsko-pomorskie',
    info: {
      0: "Obfituje w zabytki prasłowiańskie, znane uzdrowiska i atrakcje przyrodnicze; położona jest tam perła architektury gotyckiej – Toruń",
      1: "Województwo kujawsko-pomorskie położone jest w północno-centralnej Polsce i graniczy z pięcioma województwami: pomorskim, warmińsko-mazurskim, mazowieckim, łódzkim i wielkopolskim.",
      2: "Województwo posiada dwie stolice: Toruń i Bydgoszcz. Kujawsko-Pomorskie zajmuje obszar 17 972 km²."
    },
  },
  {
    images: importAll(require.context('../assets/images/podlaskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Podlaskie',
    info: {
      0: "Malowniczo położony region z ciekawymi rzekami i jeziorami jest najmniej zurbanizowaną częścią Polski; sielskie krajobrazy, urocze miejscowości i uzdrowiska oraz aż cztery parki narodowe (Białowieski, Biebrzański, Narwiański i Wigierski) zapraszają turystów",
      1: "Województwo podlaskie położone jest w północno-wschodniej Polsce i graniczy od wschodu z Białorusią, od północnego-wschodu z Litwą, a po stronie polskiej z trzema województwami: warmińsko-mazurskim, mazowieckim i lubelskim.",
      2: "Stolicą województwa jest Białystok. Podlaskie zajmuje obszar o powierzchni blisko 20 200 km²."
    },
  },
  {
    images: importAll(require.context('../assets/images/dolnośląskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Dolnośląskie',
    info: {
      0: "Pełne skarbów z zamkami i pałacami na czele, w tym z trzecim co do wielkości zamkiem w Polsce – Książ; to także góry, dwa parki narodowe (Karkonoski i Gór Stołowych), liczne górskie kurorty i największa liczba w Polsce uzdrowisk.",
      1: "Województwo dolnośląskie położone jest w południowo-zachodniej Polsce i graniczy od zachodu z Niemcami, od południa z Czechami, a po stronie polskiej z trzema województwami: lubuskim, wielkopolskim i opolskim.",
      2: "Twierdze i zamczyska z duchami, kopalnie złota, srebra i uranu, jaskinie, wygasłe wulkany, a do tego przeszło pół setki obiektów dla łasuchów na szlaku Smaki Dolnego Śląska. Czas ruszać w drogę."
    },
  },
  {
    images: importAll(require.context('../assets/images/podkarpackie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Podkarpackie',
    info: {
      0: "Na przedpolu łuku Karpat, dzięki Bieszczadom, jeden z najbardziej malowniczych regionów w Polsce; województwo podkarpackie to przyroda z parkiem narodowym (Bieszczadzki), urozmaicone zabytki z zamkami i pałacami oraz liczne uzdrowiska.",
      1: "Województwo podkarpackie położone jest w południowo-wschodniej Polsce i graniczy od wschodu z Ukrainą, od południa ze Słowacją, a po stronie polskiej z trzema województwami: małopolskim, świętokrzyskim i lubelskim.",
      2: "Jeden z najbardziej zielonych i dziewiczych obszarów Polski zaprasza na astropokazy, przejażdżki drezynami rowerowymi i na grzbiecie hucuła, a przede wszystkim do odkrycia bogactwa wielokulturowości tej ziemi."
    },
  },
  {
    images: importAll(require.context('../assets/images/małopolskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Małopolskie',
    info: {
      0: "Historyczne serce Polski ze stolicą w Krakowie, wyjątkowo bogate w atrakcje turystyczne wszelkiego rodzaju; turystów przyciągają Tatry i stolica regionu Kraków, górskie kurorty i wiele uzdrowisk; tutaj jest najwięcej – aż sześć – parków narodowych.",
      1: "Województwo małopolskie położone jest w południowej Polsce i graniczy od południa ze Słowacją, a po stronie polskiej z trzema województwami: śląskim, świętokrzyskim i podkarpackim.",
      2: "Stolicą województwa jest Kraków. Małopolskie zajmuje obszar o powierzchni blisko 15 200 km² i stanowi jeden z najbardziej atrakcyjnych turystycznie regionów naszego kraju (kulturowo i przyrodniczo)."
    },
  },
  {
    images: importAll(require.context('../assets/images/pomorskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Pomorskie',
    info: {
      0: "To dobry kurs do uzdrowisk i kurortów nad Morzem Bałtyckim, ale także do wielu interesujących zabytków, na czele z Zamkiem Krzyżackim w Malborku, wpisanym na listę UNESCO.",
      1: "Województwo pomorskie położone jest w północnej Polsce i graniczy od północy z Morzem Bałtyckim, a po stronie polskiej z czterema województwami: warmińsko-mazurskim, kujawsko-pomorskim, wielkopolskim i zachodniopomorskim.",
      2: "Stolicą województwa jest Gdańsk, który wraz z Gdynią i Sopotem tworzą aglomerację zwaną Trójmiastem. Pomorskie zajmuje obszar o powierzchni ponad 18 300 km²."
    },
  },
  {
    images: importAll(require.context('../assets/images/warmińsko-mazurskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Warmińsko-mazurskie',
    info: {
      0: "To bardzo popularny region dla turystów ze względu na Wielkie Jeziora Mazurskie; region bogaty w letnie kurorty i uzdrowisko; w regionie jest wiele uroczych miasteczek położonych wśród pięknych lasów i akwenów; stolicą województwa jest Olsztyn...",
      1: "Województwo warmińsko-mazurskie położone jest w północno-wschodniej Polsce i graniczy od północy z Rosją, a po stronie polskiej z czterema województwami: podlaskim, mazowieckim, kujawsko-pomorskim i pomorskim. ",
      2: "Ceglane warownie, ale i poniemieckie bunkry ze straszącymi w nich duchami przeszłości, rozległe lasy pachnące grzybami i jagodami, wreszcie woda – do nawigacji i dla zdrowotności – urlop w tym regionie to wręcz obowiązek!"
    },
  },
  {
    images: importAll(require.context('../assets/images/łódzkie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Łódzkie',
    info: {
      0: "To region z coraz większą liczbą atrakcji turystycznych przyrodniczych i antropogenicznych, takich jak jedyne w naszym kraju uzdrowisko termalne w Uniejowie czy obiekt narciarski w centrum Polski – Góra Kamieńsk na zboczu kopalni Bełchatów.",
      1: "Województwo łódzkie położone jest w środkowej części Polski i graniczy z sześcioma województwami: mazowieckim, świętokrzyskim, śląskim, opolskim, wielkopolskim i kujawsko-pomorskim.",
      2: "Stolicą województwa jest Łódź. Łódzkie zajmuje obszar ponad 18 200 km²."
    },
  },
  {
    images: importAll(require.context('../assets/images/mazowieckie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Mazowieckie',
    info: {
      0: "Pełne atrakcji dla turysty aktywnego i lubiącego zabytki, ze śladami życia i twórczości Chopina; największe województwo ze stolicą kraju w Warszawie, której Stare Miasto jest wpisane na listę UNESCO.",
      1: "Województwo mazowieckie położone jest w środkowo-wschodniej Polsce i graniczy z sześcioma województwami: warmińsko-mazurskim, podlaskim, lubelskim, świętokrzyskim, łódzkim i kujawsko-pomorskim.",
      2: "Stolicą województwa jest Warszawa. Mazowieckie zajmuje obszar o powierzchni ponad 35 500 km² i jest największym pod względem powierzchni i ludności województwem w Polsce."
    },
  },
  {
    images: importAll(require.context('../assets/images/lubelskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Lubelskie',
    info: {
      0: "Malowniczo położone pomiędzy Wisłą a Bugiem, na styku kultur wschodu i zachodu, kusi egzotyką; pełne przyrody z dwoma parkami narodowymi (Roztoczański i Poleski) i zabytków ze Starym Miastem w Zamościu na czele, wpisanym na listę UNESCO.",
      1: "Lubelskie kusi rejsem po Wiśle w Kazimierzu, spacerami w pradolinie Wisły, kuracjami w uzdrowiskach oraz zabytkami stolicy województwa – Lublina... ",
      2: "Województwo lubelskie położone jest we wschodniej Polsce i graniczy od wschodu z Ukrainą i Białorusią, a po stronie polskiej z czterema województwami: podlaskim, mazowieckim, świętokrzyskim i podkarpackim. "
    },
  },
  {
    images: importAll(require.context('../assets/images/lubuskie/', false, /\.(png|jpe?g|svg)$/)),
    name: 'Województwo Lubuskie',
    info: {
      0: "Najbardziej zalesione województwo w Polsce, bogate w atrakcje przyrodnicze z parkiem narodowym na czele („Ujście Warty”), atrakcje zabytkowe (np. Zamek w Łagowie) i pomilitarne (Międzyrzecki Rejon Umocniony).",
      1: "Województwo lubuskie położone jest w zachodniej Polsce i graniczy od zachodu z Niemcami, a po stronie polskiej z trzema województwami: zachodniopomorskim, wielkopolskim i dolnośląskim.",
      2: "Województwo posiada dwie stolice: Zieloną Górę i Gorzów Wielkopolski. Lubuskie zajmuje obszar o powierzchni blisko 14 000 km²."
    },
  }
]


const CustomCarousel = (props) => {
  return (
    <Carousel>
      {(regions[props.imagesId].images).map((image, key) => (
        <Carousel.Item key={key}>
          <div className="slide-content d-block w-50">
            <img
              className="d-block w-100"
              src={image.default}
              alt="slide"
            />
            <div className="d-block w-100">
              <Carousel.Caption>
                <h2>{regions[props.imagesId].name}</h2>
                <p>{regions[props.imagesId].info[key]}</p>
              </Carousel.Caption>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
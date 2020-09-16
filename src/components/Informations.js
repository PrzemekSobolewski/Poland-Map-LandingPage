import React, {useEffect} from 'react';

function importAll(r) {
    return r.keys().map(r);
}

const country =
{
    images: importAll(require.context('../assets/images/mazowieckie/', false, /\.(png|jpe?g|svg)$/)),
    info: {
        '0': "Polska jest krajem pełnym kontrastów przyrodniczych. Ze strony północnej graniczy z Morzem Bałtyckim, zaś ze strony południowej z Tatrami. Wydzielono w niej wiele parków narodowych ze względu na ich wyjątkowo cenne walory przyrodnicze. Które warto odwiedzić? Oczywiście wszystkie!",
        '1': "Warszawa jest stolicą tego pięknego kraju oraz województwa mazowieckiego. Jednocześnie jest największym miastem Polski. Miasto to zapewnia ogrom możliwości. Dzięki licznym uczelniom, rozbudowanej infrastrukturze oraz miejscom pracy, Warszawa przyciąga ludzi z całego kraju.",
        '2': "Podsumowując - Polska jest krajem cechującym się bogadztwem przyrodzniczym i historycznym. Świadczą o tym liczne parki narodowe oraz zabytki kultury, które cieszą oczy turystów każdego dnia!"
    },
}

const Informations = (props) => {
    
const handleScroll = () => {
    document.querySelectorAll('.info-container .row').forEach(function(obj,index) {
      setTimeout(() => {
        obj.classList.add('active');
      }, 100 * index)
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className="container info-container">
            {(country.images).map((image, key) => (
                <div key={key} className={props.infoVisibilityProp ? "row active" : "row"}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="single-info">
                                <div className="col-md-6 info-content">{country.info[key]}</div>
                                <div className="col-md-6 image-content"><img className="d-block w-100" src={image.default} alt="slide" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Informations;
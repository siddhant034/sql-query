import './styles.css';

export enum INFO_TYPE {
    RUN = 1,
    NO_DATA = 2,
};
  
const INFO_MSG = {
    [INFO_TYPE.RUN] : "Run a query to see results here",
    [INFO_TYPE.NO_DATA]: "No data available"
};
  
const IMG_SRC = {
    [INFO_TYPE.RUN] : "src/assets/run.png",
    [INFO_TYPE.NO_DATA]: "src/assets/no-data.png"
}
  
type InfoProps = {
    infoType: INFO_TYPE
}

const Info : React.FC<InfoProps> = ({infoType}: InfoProps) => {
    let msg = "";
    let imgSrc = "";
    if (infoType === INFO_TYPE.RUN) {
      msg = INFO_MSG[INFO_TYPE.RUN];
      imgSrc = IMG_SRC[INFO_TYPE.RUN];
    } else if (infoType === INFO_TYPE.NO_DATA) {
      msg = INFO_MSG[INFO_TYPE.NO_DATA];
      imgSrc = IMG_SRC[INFO_TYPE.NO_DATA];
    }
    return (
      <div className="info">
        <img className="info-img" src={imgSrc} alt="Status icon"/>
        <p>{msg}</p>
      </div>
    );
}

  export {Info};
const InfoBox = () => {
  return (
    <div className="InfoBox">
      <div className="Header">
        <h3>Info</h3>
        <p>Förväntat datum: 2022-08-19</p>
      </div>
      <div className="ColFlex">
        <div>
          <h4>Johanna</h4>
          <p>
            4130 gram <br />
            55 cm
          </p>
        </div>
        <div>
          <h4>Joel</h4>
          <p>
            2960 gram <br />
            49 cm
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

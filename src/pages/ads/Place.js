import React from "react";
import back from "../../assets/img/back.svg";

function AdsPlace() {
  return (
    <>
      <div className="p-4 py-5">
        <a href="/ads/details">
          <img src={back} alt="" className="mb-4" />
        </a>

        <h4 className="text-muted text-uppercase text-center pb-4">
          <i className="fas fa-map-marker-alt"></i> Local de atendimento
        </h4>

        <form name="updateAdsPlaceForm" ng-submit="updateAdsPlace(adsData)">
          <div className="mb-3">
            <p className="text-center">Tipo de atendimento:</p>
          </div>
          <div className="d-flex justify-content-between px-5 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                ng-model="adsData.type"
                ng-checked="openedAds.type == 0"
                id="inlineRadio1"
                value="0"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Em domicílio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                ng-model="adsData.type"
                ng-checked="openedAds.type == 1"
                id="inlineRadio2"
                value="1"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                No meu local
              </label>
            </div>
          </div>
          <p className="text-center mb-2">Endereço:</p>
          <input
            type="text"
            name="formatted_address"
            ng-model="adsData.formatted_address"
            id="search_input"
            className="form-control rounded-pill mb-4"
          />

          <button className="btn btn-success w-100 rounded-pill">
            <i className="fas fa-save"></i> Salvar alterações
          </button>
        </form>
      </div>
    </>
  );
}

export default AdsPlace;

import React, { useState } from "react";
import back from "../../assets/img/back.svg";
import blank from "../../assets/img/blank.png";
function AdsDetails() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="py-5 bg-purple">
        <div className="py-0 px-4">
          <a href="/ads/list">
            <img src={back} alt="" className="mb-4" />
          </a>
        </div>
      </div>
      <div id="adsMainPic" className="text-center my-auto mb-4">
        <img
          src={blank}
          className="rounded-circle w-100 border-5 border-purple border"
          alt=""
        />
        <button
          type="button"
          className="btn bg-pink text-white rounded-circle"
          data-bs-toggle="modal"
          data-bs-target="#updateAdsMainPicture"
        >
          <i className="fas fa-camera"></i>
        </button>
      </div>

      <div className="p-4">
        <p className="h4 fw-bold text-center mb-0">
          <i className="fas fa-bullhorn"></i> Ads Title
        </p>
        <p className="small text-center">
          <a
            href="#"
            className="text-decoration-none"
            data-bs-toggle="modal"
            data-bs-target="#updateAdsTitle"
          >
            <i className="fas fa-edit text-pink"></i> Editar
          </a>
        </p>

        <div className="list-group mb-4">
          <a
            href="/ads/payment"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            <span>
              <i className="fas fa-dollar-sign text-primary"></i> Formas de
              pagamento
            </span>
            <span>
              <i className="fas fa-angle-right text-pink"></i>
            </span>
          </a>
          <a
            href="/ads/availabilities"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            <span>
              <i className="far fa-clock text-primary"></i> Horários de
              atendimento
            </span>
            <span>
              <i className="fas fa-angle-right text-pink"></i>
            </span>
          </a>
          <a
            href="/ads/place"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            <span>
              <i className="fas fa-map-marker-alt text-primary"></i> Local de
              atendimento
            </span>
            <span>
              <i className="fas fa-angle-right text-pink"></i>
            </span>
          </a>
          <a
            href="/ads/description"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            <span>
              <i className="fas fa-file-text text-primary"></i> Descrição do
              anúncio
            </span>
            <span>
              <i className="fas fa-angle-right text-pink"></i>
            </span>
          </a>
          <a
            href="/ads/services"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            <span>
              <i className="fas fa-list text-primary"></i> Lista de serviços
            </span>
            <span>
              <i className="fas fa-angle-right text-pink"></i>
            </span>
          </a>
          <a
            href="/ads/photos"
            className="list-group-item list-group-item-action d-flex justify-content-between"
          >
            <span>
              <i className="fas fa-image text-primary"></i> Fotos
            </span>
            <span>
              <i className="fas fa-angle-right text-pink"></i>
            </span>
          </a>
        </div>
        <p className="mb-5 pb-4">
          <button
            type="button"
            className="btn btn-danger w-100 rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#deleteAdsModal"
          >
            <i className="fas fa-trash"></i> Excluir anúncio
          </button>
        </p>
      </div>

      <div
        className="modal fade"
        id="updateAdsMainPicture"
        tabIndex="-1"
        aria-labelledby="updateAdsMainPictureLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateAdsMainPictureLabel">
                Alterar foto de perfil
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form name="updateAdsPicForm">
                <div className="d-flex justify-content-between align-items-center">
                  <div style={{ position: "relative" }}>
                    <input
                      type="file"
                      style={{ position: "absolute", left: "-1000px" }}
                      name="userfile"
                      related-model="adsPicture"
                      ng-model="adsPicture.userfile"
                      id="selectPicInput"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill w-100"
                      id="selectPicTrigger"
                    >
                      Selecionar foto
                    </button>
                  </div>
                  <div>
                    <img
                      src="/assets/img/blank.png"
                      height="180"
                      id="tempAdsPic"
                      className="rounded-circle w-100 border-5 border-purple border"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border-top pt-3 mt-3 text-end">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="updateAdsTitle"
        tabIndex="-1"
        aria-labelledby="updateAdsTitleLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateAdsTitleLabel">
                Alterar título do anúncio
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form name="updateAdsTitleForm" ng-submit="updateTitle()">
                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Título do anúncio ou nome do profissional:
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="title"
                    ng-model="openedAds.title"
                  />
                </div>
                <div className="mt-3 pt-3 border-top text-end">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill"
                    // ng-disabled="updateAdsTitleForm.$invalid"
                    onClick={() => setLoading(true)}
                  >
                    <i className="fas fa-save"></i>
                    {loading ? <span>Salvando...</span> : <span>Salvar</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteAdsModal"
        tabIndex="-1"
        aria-labelledby="deleteAdsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteAdsModalLabel">
                Excluir anúncio
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                Tem certeza que deseja excluir este anúncio?
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn rounded-pill btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                // ng-click="delete()"
                className="btn rounded-pill btn-danger"
                onClick={() => setLoading(true)}
              >
                {loading ? <span>Excluindo...</span> : <span>Excluir</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdsDetails;

import React, { useState } from "react";

function AdsCreate() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="p-4 py-5">
        {/* Back button */}
        <a href="/ads">
          <img src="/assets/img/back.svg" alt="" className="mb-4" />
        </a>

        <h4 className="text-muted text-uppercase text-center pb-3">
          <i className="fas fa-bullhorn"></i> Criar anúncio
        </h4>

        <form name="adsCreateForm" ng-submit="create(adsData)">
          <div className="mb-4">
            <label htmlfor="title" className="form-label">
              Título do anúncio ou Nome do Profissional
            </label>
            <input
              type="text"
              name="title"
              ng-model="adsData.title"
              ng-required="true"
              id="title"
              className="form-control rounded-pill"
            />
          </div>
          <button
            className="btn btn-success w-100 rounded-pill"
            onClick={() => {
              setLoading(true);
            }}
          >
            <i className="fas fa-plus"></i>
            {loading ? <span>Criando...</span> : <span>Criar anúncio</span>}
          </button>
        </form>
      </div>
    </>
  );
}

export default AdsCreate;

import React, { useState } from "react";
import back from "../../assets/img/back.svg";

function UpdateProfile() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="p-4">
        Back button
        <a href="/profile">
          <img src={back} alt="" className="mb-4" />
        </a>
        <h4 className="text-muted text-uppercase text-center mb-4">
          Editar perfil
        </h4>
        <form
          name="updateProfileForm"
          ng-submit="updateProfile(vbData.userdata)"
        >
          <div className="mb-3">
            <label>Nome</label>
            <input
              type="text"
              className="form-control rounded-pill"
              name="name"
              ng-model="vbData.userdata.name"
              ng-required="true"
            />
          </div>
          <div className="mb-3">
            <label>E-mail</label>
            <input
              type="text"
              className="form-control rounded-pill"
              name="email"
              ng-model="vbData.userdata.email"
              ng-required="true"
            />
          </div>
          <div className="mb-4">
            <label>Celular</label>
            <input
              type="text"
              className="form-control rounded-pill"
              name="phone"
              ng-model="vbData.userdata.phone"
              ui-mask="(99) 9.9999-9999"
              ng-required="true"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary rounded-pill w-100"
            onClick={() => {
              setLoading(true);
            }}
          >
            {loading ? (
              <span ng-show="loading">Salvando...</span>
            ) : (
              <span ng-show="!loading">Salvar</span>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;

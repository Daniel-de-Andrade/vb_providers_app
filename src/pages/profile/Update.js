import React from "react";
import back from "../../assets/img/back.svg";

function UpdateProfile() {
  return (
    <>
      <div class="p-4">
        Back button
        <a href="/profile">
          <img src={back} alt="" class="mb-4" />
        </a>
        <h4 class="text-muted text-uppercase text-center mb-4">
          Editar perfil
        </h4>
        <form
          name="updateProfileForm"
          ng-submit="updateProfile(vbData.userdata)"
        >
          <div class="mb-3">
            <label>Nome</label>
            <input
              type="text"
              class="form-control rounded-pill"
              name="name"
              ng-model="vbData.userdata.name"
              ng-required="true"
            />
          </div>
          <div class="mb-3">
            <label>E-mail</label>
            <input
              type="text"
              class="form-control rounded-pill"
              name="email"
              ng-model="vbData.userdata.email"
              ng-required="true"
            />
          </div>
          <div class="mb-4">
            <label>Celular</label>
            <input
              type="text"
              class="form-control rounded-pill"
              name="phone"
              ng-model="vbData.userdata.phone"
              ui-mask="(99) 9.9999-9999"
              ng-required="true"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary rounded-pill w-100"
            ng-disabled="updateProfileForm.$invalid"
          >
            <span ng-show="!loading">Salvar</span>
            <span ng-show="loading">Salvando...</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateProfile;

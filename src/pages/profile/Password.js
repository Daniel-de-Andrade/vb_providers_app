import React from "react";
import back from "../../assets/img/back.svg";

function ChangePassword() {
  return (
    <>
      <div class="p-4">
        Back button
        <a href="/profile">
          <img src={back} alt="" class="mb-4" />
        </a>
        <h4 class="text-muted text-uppercase text-center mb-4">Editar senha</h4>
        <form name="updatePassForm" ng-submit="updatePass(passData)">
          <div class="mb-3">
            <label>Nova senha</label>
            <input
              type="password"
              class="form-control rounded-pill"
              name="password"
              ng-model="passData.password"
              ng-required="true"
            />
          </div>
          <div class="mb-4">
            <label>Confirmar nova senha</label>
            <input
              type="password"
              class="form-control rounded-pill"
              name="match"
              ng-model="passData.match"
              ng-required="true"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary rounded-pill w-100"
            ng-disabled="updatePassForm.$invalid"
          >
            <span ng-show="!loading">Salvar</span>
            <span ng-show="loading">Salvando...</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;

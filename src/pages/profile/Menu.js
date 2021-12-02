import React, { useState } from "react";
import blank from '../../assets/img/blank.png'
function Menu() {
  const [url] = useState("data:image/png;base64,{{vbData.userdata.photo}}");
  return (
    <>
      <div class="bg-purple px-4 py-5" id="profile">
        <p class="text-center mx-auto" id="profilePic">
          <img
            src={blank}
            class="rounded-circle w-100"
            style={{
              backgroundImage: url,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            alt=""
          />
          <button
            type="button"
            class="btn bg-pink text-white rounded-circle"
            data-bs-toggle="modal"
            data-bs-target="#updateProfilePicture"
          >
            <i class="fas fa-camera"></i>
          </button>
        </p>
        <p class="lead fw-bold text-center text-white mb-4">
          {/* {{vbData.userdata.name}} */}
        </p>
        <ul class="list-group mb-5" id="profileMenu">
          <li class="list-group-item bg-purple py-3">
            <a href="/profile/update" class="text-white text-decoration-none">
              <i class="fas fa-user"></i> Editar perfil
            </a>
          </li>
          <li class="list-group-item bg-purple py-3">
            <a href="/notifications" class="text-white text-decoration-none">
              <i class="fas fa-bell"></i> Notificações
            </a>
          </li>
          <li class="list-group-item bg-purple py-3">
            <a href="/agenda" class="text-white text-decoration-none">
              <i class="fas fa-calendar-alt"></i> Agenda
            </a>
          </li>
          <li class="list-group-item bg-purple py-3">
            <a href="/ads" class="text-white text-decoration-none">
              <i class="fas fa-bullhorn"></i> Meus Anúncios
            </a>
          </li>
        </ul>

        <ul class="list-group mb-5" id="profileMenu">
          <li class="list-group-item bg-purple border-secondary py-3">
            <a
              href="https://api.whatsapp.com/send?phone=5531982337478"
              target="_blank"
              rel="noreferrer"
              class="text-muted text-decoration-none"
            >
              <i class="fas fa-question-circle"></i> Ajuda
            </a>
          </li>
          <li class="list-group-item bg-purple border-secondary py-3">
            <a href="/profile/password" class="text-muted text-decoration-none">
              <i class="fas fa-lock"></i> Alterar senha
            </a>
          </li>
          <li class="list-group-item bg-purple border-secondary py-3">
            <a
              href="#"
              class="text-muted text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
            >
              <i class="fas fa-sign-out-alt"></i> Sair
            </a>
          </li>
        </ul>
      </div>

      {/* Update profile picture modal */}
      <div
        class="modal fade"
        id="updateProfilePicture"
        tabindex="-1"
        aria-labelledby="updateProfilePictureLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateProfilePictureLabel">
                Alterar foto de perfil
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form name="updateAdsPicForm" ng-submit="uploadPhoto(adsPicture)">
                <div class="d-flex justify-content-between align-items-center">
                  <div style={{ position: "relative" }}>
                    <input
                      type="file"
                      style={{ position: "absolute", left: "-1000px" }}
                      name="userfile"
                      ads-pic-model
                      related-model="adsPicture"
                      ng-model="adsPicture.userfile"
                      id="selectPicInput"
                    />
                    <button
                      type="button"
                      class="btn btn-primary rounded-pill w-100"
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
                      class="rounded-circle w-100 border-5 border-purple border"
                      //   style={{
                      //     backgroundImage: url(
                      //       "data:image/png;base64,{{profileTempPic}}"
                      //     ),
                      //     backgroundPosition: "center",
                      //     backgroundSize: "cover",
                      //   }}
                      alt=""
                    />
                  </div>
                </div>
                <div class="border-top pt-3 mt-3 text-end">
                  <button
                    type="button"
                    class="btn btn-secondary rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="submit" class="btn btn-primary rounded-pill">
                    <span ng-show="!loading">Salvar</span>
                    <span ng-show="loading">Salvando...</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      <div
        class="modal fade"
        id="logoutModal"
        tabindex="-1"
        aria-labelledby="logoutModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="logoutModalLabel">
                Fazer logout
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex justify-content-center align-items-center">
                <div>
                  <p class="mb-0">Tem certeza que deseja sair?</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn rounded-pill btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-primary"
                ng-click="logout()"
              >
                <span ng-show="!loading">Sair</span>
                <span ng-show="loading">Saindo...</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <script>
    $('#selectPicTrigger').click(function () {
        $('#selectPicInput').click()
    });
</script> */}
    </>
  );
}

export default Menu;

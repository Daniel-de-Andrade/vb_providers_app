function AdsAvailabilities() {
  return (
    <>
      <div class="p-4 py-5">
        {/* Back button */}
        <a href="/ads/details">
          <img src="/assets/img/back.svg" alt="" class="mb-4" />
        </a>

        <h4 class="text-muted text-uppercase text-center pb-4">
          <i class="far fa-clock"></i> Horários de atendimento
        </h4>

        <div class="list-group">
          <a
            href="#"
            ng-repeat="day in openedAds.availabilities"
            class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
            data-bs-toggle="modal"
            data-bs-target="#availabilityModal"
            ng-click="openAvailability(day)"
          >
            <span>{/* {{day.day}} */}</span>
            <div>
              <span ng-show="day.status == 'Fechado'">Fechado</span>
              <span ng-show="day.status == 'Aberto'">
                {/* {{day.start | mask: '99:99'}} - {{day.end | mask: '99:99'}} */}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Segunda */}
      <div
        class="modal fade"
        id="availabilityModal"
        tabindex="-1"
        aria-labelledby="mondayModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title" id="mondayModalLabel">
                {/* {{openedAvailability.day}} */}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                name="updateAvailabilityForm"
                ng-submit="updateAvailability(openedAvailability)"
                class=""
              >
                <div class="mb-4">
                  <p class="text-center">
                    Horários de
                    {/* {{openedAvailability.day}} */}
                  </p>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Disponibilidade
                    </label>
                    <select
                      name="status"
                      ng-model="openedAvailability.status"
                      class="form-select rounded-pill"
                      ng-required="true"
                      id=""
                    >
                      <option value="">Selecione</option>
                      <option value="Aberto">Aberto</option>
                      <option value="Fechado">Fechado</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <label class="perfilLabel" for="start">
                        De:
                      </label>
                      <input
                        type="text"
                        name="start"
                        ng-model="openedAvailability.start"
                        class="form-control rounded-pill"
                        ui-mask="99:99"
                      />
                    </div>
                    <div class="col-6">
                      <label class="perfilLabel" for="end">
                        Até:
                      </label>
                      <input
                        type="text"
                        name="end"
                        ng-model="openedAvailability.end"
                        class="form-control rounded-pill"
                        ui-mask="99:99"
                      />
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center justify-content-between pt-3 border-top">
                  <div>
                    <button
                      type="submit"
                      class="btn btn-primary rounded-pill me-2"
                      ng-disabled="updateAvailabilityForm.$invalid"
                    >
                      <span ng-show="!loading">Salvar</span>
                      <span ng-show="loading">Salvando...</span>
                    </button>

                    <a
                      href=""
                      class="btn btn-secondary rounded-pill"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdsAvailabilities;

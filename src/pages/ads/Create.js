function AdsCreate() {
  return (
    <>
      <div class="p-4 py-5">
        {/* Back button */}
        <a href="/ads">
          <img src="/assets/img/back.svg" alt="" class="mb-4" />
        </a>

        <h4 class="text-muted text-uppercase text-center pb-3">
          <i class="fas fa-bullhorn"></i> Criar anúncio
        </h4>

        <form name="adsCreateForm" ng-submit="create(adsData)">
          <div class="mb-4">
            <label for="title" class="form-label">
              Título do anúncio ou Nome do Profissional
            </label>
            <input
              type="text"
              name="title"
              ng-model="adsData.title"
              ng-required="true"
              id="title"
              class="form-control rounded-pill"
            />
          </div>
          <button
            class="btn btn-success w-100 rounded-pill"
            ng-disabled="adsCreateForm.$invalid"
          >
            <i class="fas fa-plus"></i>
            <span ng-show="!loading">Criar anúncio</span>
            <span ng-show="loading">Criando...</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default AdsCreate;

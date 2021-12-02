import back from '../../assets/img/back.svg'
function AdsDescription() {
    return <>
        <div className="p-4 py-5">
            {/* <!-- Back button --> */}
            <a href="/ads/details">
                <img src={back} alt="" className="mb-4" />
            </a>

            <h4 className="text-muted text-uppercase text-center pb-4">
                <i className="fas fa-file-text"></i> Descrição do anúncio
            </h4>

            <form name="updateAdsDescriptionForm" ng-submit="updateDescription(openedAds)">

                <div className="mb-4">
                    <label htmlFor="description">
                        Descrição do anúncio:
                    </label>
                    <textarea name="description" className="form-control" ng-model="openedAds.description" id="descrpition" ng-required="true" cols="10" rows="8"></textarea>
                </div>

                <button className="btn btn-success rounded-pill w-100" ng-disabled="updateAdsDescriptionForm.$invalid">
                    <i className="fas fa-save"></i>
                    <span ng-show="!loading">Salvar alterações</span>
                    <span ng-show="loading">Salvando...</span>
                </button>

            </form>
        </div>
    </>
}

export default AdsDescription
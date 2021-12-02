import back from '../../assets/img/back.svg'
import blank from '../../assets/img/blank.png'
function AdsPhotos() {
    return <>
        <div className="p-4 py-5">
            {/* <!-- Back button --> */}
            <a href="/ads/details">
                <img src={back} alt="" className="mb-4" />
            </a>

            <h4 className="text-muted text-uppercase text-center pb-4">
                <i className="fas fa-image"></i> Fotos do anúncio
            </h4>

            <div className="row g-1 mb-4">
                <div className="col-3" ng-repeat="photo in openedAds.photos">
                    <img src={blank} className="w-100" alt="" />
                    <p className="py-1 small text-center bg-light">
                    <a href="" ng-click="delete(photo.id)" className="text-decoration-none text-secondary">
                    <i className="fas fa-trash"></i>
                    </a>
                    </p>
                </div>
            </div>

            <button className="btn btn-success w-100 rounded-pill" data-bs-toggle="modal" data-bs-target="#addAdsPhotoModal">
                Enviar fotos
            </button>
        </div>

        {/* <!-- Add photo modal --> */}
        <div className="modal fade" id="addAdsPhotoModal" tabindex="-1" aria-labelledby="addAdsPhotoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addAdsPhotoModalLabel">Adicionar foto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form ng-submit="uploadFiles()">
                            <div className="mb-3">
                                <input type="file" name="userfile" ads-photo-model related-model="newPhotoData" ng-model="userfile" id=""/>
                            </div>
                            <div className="pt-3 border-top text-end">
                                <button type="button" className="btn rounded-pill btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" className="btn rounded-pill btn-primary">
                                    <span ng-show="!loading">Enviar</span>
                                    <span ng-show="loading">Enviando...</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AdsPhotos
import back from '../../assets/img/back.svg'
function AdsPayment() {
    return <>
        <div class="p-4 py-5">
            {/* <!-- Back button --> */}
            <a href="/ads/details">
                <img src={back} alt="" class="mb-4" />
            </a>

            <h4 class="text-muted text-uppercase text-center pb-4">
                <i class="fas fa-dollar-sign"></i> Formas de pagamento
            </h4>

            <p class="text-center">
                Selecione as formas de pagamento aceitas.
            </p>

            <div class="form-check py-2 border-bottom">
                <input class="form-check-input" type="checkbox" ng-model="openedAds.accept_money" ng-checked="openedAds.accept_money == 1" ng-click="changePaymentMethod('accept_money', openedAds.accept_money)" id="" />
                <label class ="form-check-label" for="pix">
                PIX
                </label>
            </div>
            <div class="form-check py-2 border-bottom">
                <input class="form-check-input" type="checkbox" ng-model="openedAds.accept_credit_card" ng-checked="openedAds.accept_credit_card == 1" ng-click="changePaymentMethod('accept_credit_card', openedAds.accept_credit_card)" id="" />
                <label class ="form-check-label" for="credit">
                Cartão de crédito
                </label>
            </div>
            <div class="form-check py-2 border-bottom">
                <input class="form-check-input" type="checkbox" ng-model="openedAds.accept_debt_card" ng-checked="openedAds.accept_debt_card == 1" ng-click="changePaymentMethod('accept_debt_card', openedAds.accept_debt_card)" id="" />
                <label class ="form-check-label" for="debit">
                Cartão de débito
                </label>
            </div>
            <div class="form-check py-2">
                <input class="form-check-input" type="checkbox" ng-model="openedAds.accept_pix" ng-checked="openedAds.accept_pix == 1" ng-click="changePaymentMethod('accept_pix', openedAds.accept_pix)" id="" />
                <label class ="form-check-label" for="money">
                Dinheiro
                </label>
            </div>
        </div>
    </>
}

export default AdsPayment
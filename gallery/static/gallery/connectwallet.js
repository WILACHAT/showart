import _regeneratorRuntime from 'babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var options = { method: 'GET' };
document.addEventListener('DOMContentLoaded', function () {
    var getAccount = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var accounts, account, getcooked;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return ethereum.request({ method: 'eth_requestAccounts' });

                        case 2:
                            accounts = _context.sent;
                            account = accounts[0];
                            getcooked = getCookie('csrftoken');


                            fetch('/connectwallet', {
                                method: 'PUT',
                                headers: { 'X-CSRFToken': getcooked },
                                body: JSON.stringify({
                                    wallet_address: account

                                })
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function getAccount() {
            return _ref.apply(this, arguments);
        };
    }();

    console.log("wallet!");
    var ethereumButton = document.querySelector('.enableEthereumButton');
    var showAccount = document.querySelector('.showAccount');

    ethereumButton.addEventListener('click', function () {

        getAccount();
    });
});
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
const options = {method: 'GET'};
document.addEventListener('DOMContentLoaded', function() {
  console.log("wallet!")
  const ethereumButton = document.querySelector('.enableEthereumButton');
  const showAccount = document.querySelector('.showAccount');

  ethereumButton.addEventListener('click', () => {
    
    getAccount();
  });
  
  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const getcooked = getCookie('csrftoken')

    fetch(`/connectwallet`, {
        method: 'PUT',
        headers:{'X-CSRFToken': getcooked},
            body: JSON.stringify({
            wallet_address: account
           
            })
      })
  }
});

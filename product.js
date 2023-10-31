axios
    .get('https://5469ba7e-40d5-4e1b-8442-064e7a72fc5b.mock.pstmn.io/suits')
    .then(function(res) {
        const suits = res.data.suits;

        console.log(suits);

        let productHtml = "";
        for(var i = 0; i < suits.length; i++) {
            productHtml = productHtml + '<div class="product_card">'
                            +'<div class="product_img"><img src="' + suits[i].imageUrl + '"></div>'
                            +'<div class="product_info">'
                                +'<span class="product_title">' + suits[i].name + '</span>'
                                +'<span class="product_price">￦' + suits[i].price + '</span>'
                            +'</div>'
                        +'</div>';
        }
        document.querySelector(".prod_list").insertAdjacentHTML('afterbegin', productHtml);

    })
    .catch(function(err) {
        console.log('에러발생');
        console.log(err);
    })  
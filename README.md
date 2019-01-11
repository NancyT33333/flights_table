# flights_table


# Табло аэропорта

Разработайте клиентское приложение (сайт), где будет табло аэропорта. У табло должны быть следующие функции:

1. просмотр только вылетающих рейсов
2. просмотр только прилетающих рейсов
3. просмотр задержанных рейсов
4. поиск по номеру рейса
В качестве примера можно посмотреть на <a href='http://www.svo.aero/'>http://www.svo.aero/</a>. Ограничений на использование шаблонизаторов и библиотек нет. Плюсом будет, если данные для табло вы получите из публичных api. Если решите их не использовать, то положите данные в отдельный файл в репозитории.

# Дополнительный вопрос


Почему <code>this._i</code> не увеличивается. Как исправить?

<pre>
<code>
function Ticker() {
    this._i = 0
};
Ticker.prototype = {
    tick: function() {
       console.log(this._i++);
    }
};
var ticker = new Ticker();
setInterval(ticker.tick, 1000);
</code>
</pre>

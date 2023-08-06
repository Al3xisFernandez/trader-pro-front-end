import React from "react";

const Intro = () => {
  return (

    <div className="Intro">
      <h1>¿Que es el trading?</h1>
      <p>
        El trading es una actividad económica que implica comprar y vender activos.
        Estos activos pueden ser bienes, servicios o instrumentos financieros como acciones, bonos, divisas, opciones, futuros y criptomonedas, entre otros.
        El término "trading" a menudo se asocia con operaciones a corto plazo, donde los traders compran y venden rápidamente sus posiciones.
        Sin embargo, existen diversas estrategias de trading, como el "day trading", "swing trading" y trading de tendencia, entre otras.
      </p>
      <h1> ¿Que es invertir?</h1>
      <p>
        la inversión implica comprar instrumentos financieros con la expectativa de venderlos más adelante a un precio más alto, con el objetivo de obtener un retorno
        (también conocido como ROI, retorno de la inversión). A diferencia del trading, la inversión generalmente sigue un enfoque a largo plazo en la acumulación de valor.
        Los inversores buscan generar riqueza a lo largo de un período prolongado, que puede ser de años o incluso décadas. Para identificar oportunidades de inversión potencialmente favorables, los inversores suelen utilizar factores fundamentales.
        Debido a su enfoque a largo plazo, los inversores generalmente no se preocupan por las fluctuaciones de precios a corto plazo
      </p>
      <h1>Diferencia entre trading e invertir</h1>
      <p>
        Los inversores buscan obtener beneficios a lo largo de un período de tiempo más prolongado, con horizontes de inversión que pueden abarcar años o décadas, y sus objetivos de retorno suelen ser mayores.
        Por otro lado, los traders buscan aprovechar la volatilidad del mercado, realizando operaciones más frecuentes y buscando obtener retornos más pequeños en cada transacción.
      </p>
      <h1>Análisis fundamental</h1>
      <p>
        El análisis fundamental es un método para evaluar la valoración de un activo financiero, considerando factores económicos y financieros.
        Los analistas determinan si el activo está infravalorado o sobrevalorado. En el caso de criptomonedas, también se pueden utilizar métricas on-chain para analizar datos de blockchains públicas.
        Aunque el análisis fundamental se aplica ampliamente en el mercado de valores y Forex, en criptomonedas es menos efectivo debido a la falta de un marco estandarizado y la influencia de la especulación y narrativas.
        A medida que el mercado madure, podrían desarrollarse métodos más precisos para evaluar criptoactivos.
      </p>
      <h1>Análisis tecnico</h1>
      <p>
        El análisis técnico es una metodología utilizada por analistas para predecir el comportamiento futuro del mercado basándose en el histórico de la acción del precio.
        En lugar de buscar el valor intrínseco de un activo, los analistas técnicos se enfocan en patrones gráficos, acción del precio, volumen y el uso de indicadores técnicos para identificar oportunidades.
        También es útil para la gestión del riesgo, al proporcionar un modelo para analizar la estructura del mercado.
        El análisis técnico es ampliamente aplicado en varios mercados financieros, incluyendo el de criptomonedas, donde puede ser efectivo debido a la influencia de la especulación.
      </p>
      <h1>¿Que mueve el mercado?</h1>
      <p>
        El precio de un activo financiero está determinado por el equilibrio entre la oferta y la demanda, es decir, por los compradores y vendedores en el mercado.
        Además de este factor, pueden influir elementos fundamentales como el estado de la economía, factores técnicos como la capitalización de mercado de una criptomoneda, y también el sentimiento del mercado o noticias recientes.
        Sin embargo, en última instancia, lo que realmente mueve los mercados financieros es el equilibrio entre la oferta y la demanda en un momento dado.
      </p>
      <h1>Tendencias</h1>
      <p>
        Una tendencia de mercado es la dirección general en la que se mueve el precio de un activo.
        En el análisis técnico, se identifican utilizando la acción del precio, líneas de tendencia o medias móviles clave. Hay dos tipos principales de tendencias: alcista, donde los precios suben de forma continua, y bajista, donde los precios caen de manera continua.
        También puede haber mercados laterales, donde no hay una tendencia clara.
        Es importante entender que una tendencia no implica que el precio se mueva siempre en una sola dirección, ya que pueden haber retrocesos en una tendencia alcista o rebotes en una tendencia bajista.
      </p>
      <figure>
        <img src={require("../../images/tendencias de bitcoin.png")} alt="tendencia de bitcoin" />
        <figcaption>Bitcoin nunca tuvo una tendencia bajista desde su creacion.</figcaption>
      </figure>
      <h1>Ciclos de mercado</h1>
      <p>Estos ciclos pueden tener diferentes duraciones, y en intervalos temporales prolongados, suelen ser más fiables. 
        Sin embargo, también es posible identificar pequeños ciclos en gráficos más cortos. Es difícil determinar con precisión en qué punto del ciclo de mercado se encuentra uno en un momento dado. 
        Solo después de que una parte del ciclo haya concluido se puede realizar un análisis más preciso. Además, los ciclos de mercado raramente presentan puntos de inicio y final concretos, lo que dificulta aún más su identificación.</p>
    </div>

  );
};

export default Intro;

import React from "react";

function OpcionesFinancieras() {
  return (
    <div>
      <h1>Opciones Financieras</h1>
      <p>
        Las opciones las vemos en el curso avanzado, sin embargo, quiero que se
        vayan familiarizando los derivados financieros. Vamos a dar las nociones
        básicas de estos instrumentos, técnicamente son derivados que operan
        sobre un activo subyacente, en las próximas líneas veremos el concepto y
        los tipos de opciones que existen. ¿Qué es una opción? Una opción es un
        contrato que da a su comprador el derecho, pero no la obligación, a
        comprar o vender activos subyacentes (acciones, índices bursátiles, etc)
        a un precio predeterminado (strike o precio de ejercicio), hasta una
        fecha concreta (vencimiento). Existen dos clases de opciones: call y
        put. ¿Qué es una opción call? Una opción call da a su comprador el
        derecho, pero no la obligación, a comprar un activo subyacente a un
        precio predeterminado llamado precio de ejercicio, hasta una fecha
        concreta llamada vencimiento. El vendedor de la opción call tiene la
        obligación de vender el activo en el caso de que el comprador ejerza el
        derecho a comprar. ¿Qué es una opción put? Una opción put da a su
        comprador el derecho, pero no la obligación, a vender un activo a un
        precio predeterminado llamado precio de ejercicio, hasta una fecha
        concreta llamada vencimiento. El vendedor de la opción put tiene la
        obligación de comprar el activo en el caso de que el comprador de la
        opción ejerza el derecho a vender el activo. ¿Qué es la prima de una
        opción? La prima es el precio al cual se realiza la operación. Dicho
        precio es pagado por el comprador de la opción al vendedor de la misma.
        A cambio de recibir la prima, el vendedor de una opción put está
        obligado a comprar el activo al comprador si éste la ejerce. El vendedor
        de la opción siempre cobra la prima, al margen de que se ejerza o no la
        opción. Prima = Valor intrínseco + Valor temporal El valor intrínseco es
        el beneficio que proporciona una opción si se ejerce en el mismo momento
        en que se está valorando. Por tanto, este componente va a ser siempre
        mayor o igual a cero. Será cero cuando la opción no aporte beneficios al
        comprador. Prima – Valor intrínseco = Valor temporal El valor temporal
        trata la cantidad adicional que el comprador de la opción está dispuesto
        a pagar por beneficiarse de una evolución favorable del precio limitando
        su riesgo a la prima que paga. Por lo tanto, teniendo en cuenta el
        tiempo a vencimiento y la volatilidad esperada, estimaremos entre qué
        niveles se va a mover el activo (máximo y mínimo) y en función de ello
        determinaremos qué prima estamos dispuestos a pagar. Cuanto mayor sea la
        incertidumbre, mayor será el valor temporal, siendo máximo cuando el
        subyacente cotice al precio strike. Clasificación de las opciones. La
        elección del precio de ejercicio condiciona la prima que se debe pagar
        por ella.  In the money (ITM) – Dentro de dinero  En una call cuando
        el precio del subyacente es superior al precio de ejercicio.  En una
        put cuando el precio del subyacente es inferior al precio de ejercicio.
         At the money (ATM) – En el dinero  En ambos casos cuando el
        subyacente cotiza al mismo precio que el precio de ejercicio.  Out the
        money (OTM) – Fuera de dinero  En una call cuando el precio del
        subyacente es inferior al precio de ejercicio.  En una put cuando el
        precio del subyacente es superior al precio de ejercicio. Ejemplo de
        situaciones aconsejables para la compra de Calls:  Cuando una acción va
        a tener una tendencia alcista (es más barato y rentable que la compra de
        acciones).  Cuando una acción ha venido teniendo una tendencia alcista
        fuerte y el inversor no ha comprado, pudiéndose pensar que está cara,
        pero que puede seguir subiendo. Compre una Call, aproveche las subidas
        si la acción sigue subiendo y tenga limitadas sus pérdidas si la acción
        cae.  Cuando quiera comprar acciones en un futuro próximo porque van a
        subir pero hoy no tiene los fondos necesarios. Aproveche la subida
        comprando opciones Call sin tener que comprar hoy las acciones. Ejemplo
        de situaciones aconsejables para la compra de Puts: Comprar una opción
        Put es sinónimo de comprar un derecho a vender. Interesa comprar una
        opción Put cuando se prevean caídas de precios en sus acciones, porque
        mediante la compra de Put se fija el precio a partir del cual gana
        dinero. Si la acción cae por debajo de ese precio, el inversor gana
        dinero. Esta es la función de cobertura de la compra de Puts, en caso de
        caída de la cotización. Si un inversor tiene acciones y cae su
        cotización, las ganancias obtenidas con la opción Put compensan en todo
        o en parte la pérdida experimentada por la caída de la acción.
      </p>
    </div>
  );
}

export default OpcionesFinancieras;

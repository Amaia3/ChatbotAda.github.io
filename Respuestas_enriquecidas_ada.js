'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');
const { Payload } = require("dialogflow-fulfillment");

//declara un nombre de constante de solo lectura y ámbito de bloque.

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers)); // Convertir de JSON a string
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

      function welcome(agent) {
        agent.add(`¡Hola! Soy Ada 👩🏻‍💻 y estoy aquí para ayudarte con las dudas del Máster en Ingeniería Informática de la UCM. Estas son algunas de las preguntas frecuentes que puedes hacerme:`);
        let payload = {
                "richContent": [
                  [
                    {
                      "type": "list",
                      "title": "Plan de estudios 📚",
                      "subtitle": "Listado de asignaturas por módulos.",
                      "event": {
                        "name": "asignaturas",
                        "languageCode": "",
                        "parameters": {}
                      }
                    },
                    {
                      "type": "list",
                      "title": "Info matrícula 📆",
                      "subtitle": "Información sobre los plazos para realizar la preinscripción.",
                      "event": {
                        "name": "matricula",
                        "languageCode": "",
                        "parameters": {}
                      }
                        },
                      {
                      "type": "list",
                      "title": "Horario 🕓",
                      "subtitle": "Conoce el horario de las clases.",
                      "event": {
                        "name": "horario",
                        "languageCode": "",
                        "parameters": {}
                      }
                    },
                      {
                      "type": "list",
                      "title": "Ubicación 📍",
                      "subtitle": "¿Dónde se encuentra la Facultad de Informática?",
                      "event": {
                        "name": "ubicacion",
                        "languageCode": "",
                        "parameters": {}
                      }
                    },
                  ]
                ]
              };

        agent.add(
            new Payload(agent.UNSPECIFIED, payload, { rawPayload: true, sendAsMessage: true })
        );
    }


    function faqErasmus(agent) {
        agent.add(`Ofrecemos la posibilidad de realizar tu segundo año en el extranjero y se siguen los Erasmus de la Facultad de Informática`);
        let payload = {
            "richContent": [
                [
                    {
                        type: "info",
                        title: "Para saber más información haz click aquí 🌎",
                        image: {
                            src: {
                                rawUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Escudo_de_la_Universidad_Complutense_de_Madrid.svg/800px-Escudo_de_la_Universidad_Complutense_de_Madrid.svg.png"
                            }
                        },
                        actionLink: "https://informatica.ucm.es/erasmus-plus"
                    }]
            ]
        };
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, { rawPayload: true, sendAsMessage: true })
        );
    }

    function faqMatricula(agent) {
        agent.add(`Puedes hacer la matrícula durante el segundo plazo ordinario del 27 de abril al 27 de mayo o esperar a la tercera convocatoria, siempre que queden plazas libres, del 1 al 6 de septiembre`);
        let payload = {
            "richContent": [
                [
                    {
                        type: "info",
                        title: "Puedes hacer la preinscripción haciendo click aquí 📝",
                        image: {
                            src: {
                                rawUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Escudo_de_la_Universidad_Complutense_de_Madrid.svg/800px-Escudo_de_la_Universidad_Complutense_de_Madrid.svg.png"
                            }
                        },
                        actionLink: " https://www.ucm.es/solicitud-online-de-admision"
                    }]
            ]
        };
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, { rawPayload: true, sendAsMessage: true })
        );
    }

 function faqHorario(agent) {
        agent.add(`Las clases son presenciales y tienen un horario de tarde de 5 p.m a 9 p.m (puede cambiar según las optativas que tengas)`);
        let payload = {
            "richContent": [
                [
                    {
                        type: "info",
                        title: "Consulta aquí el horario detallado por asignaturas",
                        image: {
                            src: {
                                rawUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Escudo_de_la_Universidad_Complutense_de_Madrid.svg/800px-Escudo_de_la_Universidad_Complutense_de_Madrid.svg.png"
                            }
                        },
                        actionLink: "https://informatica.ucm.es/horarios-por-curso-y-grupo-2021-2022"
                    }]
            ]
        };
        agent.add(
            new Payload(agent.UNSPECIFIED, payload, { rawPayload: true, sendAsMessage: true })
        );
    }

function faqUbicacion(agent) {
        agent.add(`La facultad se encuentra en la dirección C/ Prof. José García Santesmases. Para llegar a ella puedes ir en metro, línea 6 hasta Ciudad Universitaria, o en los autobuses: U, G, F, 82 🚌`);
        let payload = {
            "richContent": [
                [
                    {
                        type: "button",
                    	  icon: {
     					    "type": "place",
      					    "color": "#1b8fac"
      								  },
               		 	text: "Ver ubicación 📍",
       				 	link: "https://www.google.com/maps/place/UCM:+Facultad+de+Inform%C3%A1tica/@40.4527655,-3.742266,15z/data=!4m12!1m6!3m5!1s0xd4229d2a9f08b1f:0xcf68cce94ec84cb8!2sUCM:+Facultad+de+Inform%C3%A1tica!8m2!3d40.4527655!4d-3.7335113!3m4!1s0xd4229d2a9f08b1f:0xcf68cce94ec84cb8!8m2!3d40.4527655!4d-3.7335113",
                    }
                ]
            ]
        };

        agent.add(
            new Payload(agent.UNSPECIFIED, payload, { rawPayload: true, sendAsMessage: true })
        );
    }



    function faqPrecio(agent) {
        console.log('faqPrecio parameters: ' + JSON.stringify(request.body.queryResult.parameters));
        console.log('faqPrecio nationaltyEntity: ' + JSON.stringify(request.body.queryResult.parameters.Nacionalidad));

        var nationaltyEntity = request.body.queryResult.parameters.Nacionalidad;

        if (nationaltyEntity !== "") {
            if (nationaltyEntity === "Europa") {
                agent.add(`El precio general por crédito de primera matrícula es de 19,43 € €, así que el precio total es de 1.748,7€`);


            } else if (nationaltyEntity === "Fuera") {
                agent.add(`Para extranjeros se aplicará el precio público correspondiente a 4ª matrícula (154,80 €), el precio total es de 13.932€`);
            }

        } else {
            agent.add(`¿Eres de la Unión Europea o de fuera de la Unión Europea?`);

        }
    }

    function faqAsignaturas(agent) {
        agent.add(`El plan de estudio está compuesto por tres módulos:`);
        //Declarar una variable local con let = asigna un valor en este caso datos JSON
        let payload = {
            "richContent": [
                [
                    {
                        "type": "button",
                        "icon": {
                            "type": "chevron_right",
                            "color": "#42A5F5"
                        },
                        "text": "Tecnologías Informáticas 🖥️",
                        "event": {
                            "name": "Tecnologias_Informaticas",
                            "languageCode": "es-ES",
                            "parameters": {}
                        }
                    },
                    {
                        "type": "button",
                        "icon": {
                            "type": "chevron_right",
                            "color": "#42A5F5"
                        },
                        "text": "Dirección y Gestión 📝",
                        "event": {
                            "name": "Direccion_gestion",
                            "languageCode": "es-ES",
                            "parameters": {}
                        }
                    },
                    {
                        "type": "button",
                        "icon": {
                            "type": "chevron_right",
                            "color": "#42A5F5"
                        },
                        "text": "Complementos Ingeniería Informática 🕹️",
                        "event": {
                            "name": "C_informatica",
                            "languageCode": "es-ES",
                            "parameters": {},
                        }
                    }

                ]

            ]

        };

        agent.add(
            new Payload(agent.UNSPECIFIED, payload, { rawPayload: true, sendAsMessage: true })
        );
    }


    // // Uncomment and edit to make your own Google Assistant intent handler
    // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
    // // below to get this function to be run when a Dialogflow intent is matched
    // function googleAssistantHandler(agent) {
    //   let conv = agent.conv(); // Get Actions on Google library conv instance
    //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
    //   agent.add(conv); // Add Actions on Google library responses to your agent's response
    // }
    // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
    // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
intentMap.set('Default Welcome Intent', welcome);
intentMap.set('FAQ Erasmus', faqErasmus);
intentMap.set('FAQ Matricula', faqMatricula);
intentMap.set('FAQ Ubicacion', faqUbicacion);
intentMap.set('FAQ Horario', faqHorario);
intentMap.set('FAQ Precio', faqPrecio);
intentMap.set('FAQ Asignaturas', faqAsignaturas); //Ejecutar las funciones
agent.handleRequest(intentMap);

});


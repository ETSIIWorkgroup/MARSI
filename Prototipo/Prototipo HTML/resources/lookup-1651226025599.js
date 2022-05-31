(function(window, undefined) {
  var dictionary = {
    "342f9bb8-6090-4f9e-99ca-e1dbe99216cf": "LibreriasTerceros",
    "05cddf06-be3c-46a8-a8d7-77e3c0bb5e7d": "Ajustes_2",
    "53ed5eca-7b06-41c1-aee4-90139acce1a8": "HistorialCitas",
    "5535134e-30ab-4c38-9d9d-e0f10813087e": "Registro_1",
    "0cff2280-8cda-4f8d-9bc6-45fc81f34ec9": "VerificacionEnfermedad_1",
    "5f5e22de-6a25-4f4b-bdca-537cf443fab2": "Registro_2",
    "f8aecb3c-0fdc-487c-9927-bafaf6fe1a0f": "TerminosCondiciones",
    "082efb3e-8a03-4948-b864-3315cc17d33d": "Notificaciones_1",
    "571c1db0-414d-4dc0-bc54-d9e8f46c6970": "Notificaciones_2",
    "dac7cf6c-3640-4a16-a226-4f9e356d7759": "EleccionCita",
    "ee5b5949-652f-4720-bf3a-542849145483": "PoliticaPrivacidad",
    "53fc3a8e-c791-4100-bbe8-9fd6ef927053": "Ajustes",
    "2b1c56f8-5b15-49fa-b117-72d95b3f1486": "VerificacionEnfermedad_2",
    "f2bb3438-d991-4a83-a7e2-7e2a9be630f5": "Mapa",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Inicio",
    "b1efe33e-1ae2-43df-8c46-6444283506af": "EleccionCita_2",
    "df1e824c-8fef-4ce4-96ef-cbc33cbc0a44": "HistorialCitas_2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
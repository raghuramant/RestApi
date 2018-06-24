$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Createpet.feature");
formatter.feature({
  "line": 2,
  "name": "Create a new pet",
  "description": "",
  "id": "create-a-new-pet",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    }
  ]
});
formatter.scenario({
  "line": 16,
  "name": "Update a pet using Put method",
  "description": "",
  "id": "create-a-new-pet;update-a-pet-using-put-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@updatepet"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is using the baseURI",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user make PUT call on the pet status endpoint for available pets \"/pet\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user need to get a response code: 200",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonScenarioSteps.i_am_using_the_baseURI()"
});
formatter.result({
  "duration": 844203740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/pet",
      "offset": 66
    }
  ],
  "location": "Createnewpetsteps.user_make_PUT_call_on_the_pet_status_endpoint_for_available_pets(String)"
});
formatter.result({
  "duration": 1998485029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 34
    }
  ],
  "location": "CommonScenarioSteps.i_need_to_get_a_response_code(int)"
});
formatter.result({
  "duration": 13893030,
  "error_message": "java.lang.SecurityException: class \"org.hamcrest.Matchers\"\u0027s signer information does not match signer information of other classes in the same package\r\n\tat java.lang.ClassLoader.checkCerts(Unknown Source)\r\n\tat java.lang.ClassLoader.preDefineClass(Unknown Source)\r\n\tat java.lang.ClassLoader.defineClass(Unknown Source)\r\n\tat java.security.SecureClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.defineClass(Unknown Source)\r\n\tat java.net.URLClassLoader.access$100(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.net.URLClassLoader$1.run(Unknown Source)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)\r\n\tat java.lang.ClassLoader.loadClass(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat com.common.StepDefinitionHelper.validateResponseCode(StepDefinitionHelper.java:100)\r\n\tat com.common.CommonScenarioSteps.i_need_to_get_a_response_code(CommonScenarioSteps.java:25)\r\n\tat ✽.Then user need to get a response code: 200(Createpet.feature:19)\r\n",
  "status": "failed"
});
});
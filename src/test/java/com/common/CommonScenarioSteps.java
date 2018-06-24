package com.common;

import java.util.List;
import java.util.Map;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CommonScenarioSteps extends Helper {
	private StepDefinitionHelper commonCode = getStepDefinitionHelper();

	@Given("^user is using the baseURI$")
	public void i_am_using_the_baseURI() throws Exception {
		commonCode.configureBaseUri();
	}

	@Then("^user need to get a response code: (\\d+)$")
	public void i_need_to_get_a_response_code(int code) throws Exception {
		statusCode = code;
		if (response != null) {
			validatableResponseJson = null;
			validatableResponseJson = commonCode.validateResponseCode(code);
			Assert.assertEquals(code, response.getStatusCode());
		}
	}

	@Then("^I validate the error response message\\.$")
	public void i_validate_the_error_response_message(Map<String, String> responseFields) throws Exception {
		commonCode.validateResponsMessage(responseFields);
	}

	@Then("^I validate the response message\\.$")
	public void i_validate_the_response_message(Map<String, String> responseFields) throws Exception {
		commonCode.validateResponsMessage(responseFields);
	}

	@Then("^I verify the response fields$")
	public void I_verify_the_response_fields(List<String> responseFields) throws Exception {
		commonCode.verifyResponseFields(responseFields);
	}
	
	
	
}

package com.stepdefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/FeatureFiles/pet", tags = { "@updatepet" }, glue = {
		"com.stepdefinitions",
		"com.common" }, dryRun = false, monochrome = true, plugin = { "pretty", "html: target/report/html/" })
public class JunitTestRunner {

}

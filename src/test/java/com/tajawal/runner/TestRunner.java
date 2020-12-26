package com.tajawal.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/resources/features", glue = "com.tajawal.stepdefs", dryRun = false, strict = false, monochrome = true, tags = {
		"@hotels_Regression" }, plugin = { "html:target/cucumber", "html:target/cucumber-html-report",
				"json:target/cucumber.json", "pretty:target/cucumber-pretty.txt", "usage:target/cucumber-usage.json",
				"junit:target/cucumber-results.xml" })
public class TestRunner {

	public static final String RESOURCE_PATH = System.getProperty("user.dir") + "//src//test//resources//";
	@SuppressWarnings("unused")
	private static final String DATE_FORMAT = "dd-MMM-yy - hh:mm:ss a";
	public static String cucumberJsonContent;

}
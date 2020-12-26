package com.tajawal.stepdefs;

import static io.restassured.RestAssured.given;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.io.StringWriter;
import java.net.URL;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.Random;
import org.apache.commons.io.output.WriterOutputStream;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.properties.PropertiesConfiguration;
import org.junit.Assert;

import com.tajawal.utilities.ReusableMethods;
import com.tajawal.utilities.TestContext;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;

public class CommonSteps {

	static RequestSpecification requestSpecs;
	static ResponseBody body;
	public static Scenario step;
	public static Response res;
	public static FileInputStream fis;
	public static Properties prop = new Properties();
	public static Properties propResource = new Properties();
	public static Properties mongoprop = new Properties();
	public static Properties propLog4j = new Properties();
	long currentTimeStamp = System.currentTimeMillis();
	static String environmentName;
	static String msEnvironmentName;
	static String threeDSecureEvironmentName;
	static String jiraEnvironmentName;
	static String generateKloveReport;
	static String generateLogs;
	public static String resourceURL;
	public static Logger log = LogManager.getLogger(CommonSteps.class.getName());
	public static StringWriter requestWriter;
	public static PrintStream requestCapture;
	public static StringWriter responseWriter;
	public static PrintStream responseCapture;
	public static StringWriter errorWriter;
	public static PrintStream errorCapture;
	public static String locationHeaderValue;
	public static int getNoOfRecords;
	public static long uniquereferencecode;
	public String encryptedKey;
	public static String jsonResponseFieldValue;
	public String payload;
	public static String bodyStringValue;
	public static JsonPath jsonPathResponse;
	public static PropertiesConfiguration config = null;
	public static String random;

	URL envPropertyPath = getClass().getClassLoader().getResource("env.properties");
	URL resourcePropertyPath = getClass().getClassLoader().getResource("resource.properties");

	Date now = new Date();

	URL temp = getClass().getClassLoader().getResource("env.properties");
	URL temp1 = getClass().getClassLoader().getResource("resource.properties");
	TestContext testContext;
	Map<String, Object> bodyMap;
	static Map<String, String> serviceListMap = new HashMap<>();

	public CommonSteps(TestContext context) {
		this.testContext = context;
	}

	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param S
	 * 
	 */
	@Before
	public void beforeEveryScenario(Scenario s) throws IOException {
		// ReportsManager.initReporting(s);
		requestWriter = new StringWriter();
		requestCapture = new PrintStream(new WriterOutputStream(requestWriter), true);

		responseWriter = new StringWriter();
		responseCapture = new PrintStream(new WriterOutputStream(responseWriter), true);

		errorWriter = new StringWriter();
		errorCapture = new PrintStream(new WriterOutputStream(errorWriter), true);
		envPropertyPath = getClass().getClassLoader().getResource("properties/env.properties");
		resourcePropertyPath = getClass().getClassLoader().getResource("properties/resource.properties");

		fis = new FileInputStream(envPropertyPath.getFile());
		prop.load(fis);

		fis = new FileInputStream(resourcePropertyPath.getFile());
		propResource.load(fis);

		generateLogs = prop.getProperty("generateLogs");

		if (generateLogs.equalsIgnoreCase("yes")) {
			log.info(
					"-----------------------------------------------------------------------------------------------------");
			log.info(s.getName());
			log.info(
					"-----------------------------------------------------------------------------------------------------");
		}

		System.out.println(
				"-----------------------------------------------------------------------------------------------------");
		System.out.println(s.getName());
		System.out.println(
				"-----------------------------------------------------------------------------------------------------");
		// if variables are to be passed from Jenkings
		if ((System.getenv("env") == null || System.getenv("env").isEmpty())) {

			environmentName = prop.getProperty("Environment");
		} else {
			environmentName = System.getenv("env");
		}

		if (generateLogs.equalsIgnoreCase("yes")) {
			log.info("Environment: " + prop.getProperty(environmentName));
		}
	}

	// Get URL
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 */
	@Given("^Testing environment$")
	public void getBaseURI() throws Throwable {
		RestAssured.baseURI = prop.getProperty(environmentName);
		RestAssured.useRelaxedHTTPSValidation();
	}

	// Set headers and their values
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param headers
	 * 
	 */
	@When("^I pass headers$")
	public void setHeaders(Map<String, String> headers) throws Throwable {
		Iterator<Entry<String, String>> it = headers.entrySet().iterator();
		requestSpecs = given().filter(new RequestLoggingFilter(requestCapture))
				.filter(new ResponseLoggingFilter(responseCapture)).contentType(ContentType.JSON);
		while (it.hasNext()) {
			Map.Entry<String, String> pair = it.next();
			Random rand = new Random();
			int n = rand.nextInt(50);
			// set Unique-Reference-Code as unique
			if (pair.getKey().equals("Unique-Reference-Code") && !(pair.getValue().isEmpty())
					&& !(pair.getValue().equals("uniquereferencecode"))) {
				requestSpecs = requestSpecs.header(pair.getKey(), pair.getValue());
				uniquereferencecode = currentTimeStamp;
			} else if (pair.getKey().equals("Unique-Reference-Code")
					&& (pair.getValue().equals("uniquereferencecode"))) {
				uniquereferencecode = currentTimeStamp;
				requestSpecs = requestSpecs.header(pair.getKey(), uniquereferencecode);
			} else if ((pair.getKey().equals("Unique-Reference-Code")) && (pair.getValue().isEmpty())) {
				requestSpecs = requestSpecs.header(pair.getKey(), "" + n + currentTimeStamp);

			}
			// set Client-Timestamp as unique
			else if (pair.getKey().equals("Client-Timestamp")) {
				if (pair.getValue().isEmpty())
					requestSpecs = requestSpecs.header(pair.getKey(), currentTimeStamp);
				else
					requestSpecs = requestSpecs.header(pair.getKey(), pair.getValue());
			}

			else {
				requestSpecs = requestSpecs.header(pair.getKey(), pair.getValue());
			}
		}
	}

	// Set queryParameters and there values
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param queryParam
	 */

	@And("^I pass queryParameters$")
	public void setQueryParam(Map<String, String> queryParam) throws Throwable {
		String temp;
		Iterator<Entry<String, String>> it = queryParam.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, String> pair = it.next();

			if (pair.getValue().contains("jsonResponseFieldValue")) {
				requestSpecs = requestSpecs.queryParam(pair.getKey(), jsonResponseFieldValue);
			} else if (pair.getValue().contains("locationHeader")) {
				requestSpecs = requestSpecs.queryParam(pair.getKey(), locationHeaderValue);
			} else if (pair.getValue().contains("environment")) {
				requestSpecs = requestSpecs.queryParam(pair.getKey(), prop.getProperty(environmentName
						+ pair.getValue().substring(pair.getValue().indexOf("environment") + "environment".length())));
			} else if (pair.getValue().matches("currentdate")) {

				requestSpecs = requestSpecs.queryParam(pair.getKey(), String.valueOf(currentTimeStamp));
			} else if ((pair.getKey().contains("&") && pair.getValue().contains("&"))
					&& (pair.getKey().split("&").length == pair.getValue().split("&").length)) {
				String queryParamKey[] = pair.getKey().split("&");
				String queryParamValue[] = pair.getValue().split("&");

				for (int i = 0; i < queryParamKey.length; i++)
					requestSpecs = requestSpecs.queryParam(queryParamKey[i], queryParamValue[i]);
			}

			else {
				requestSpecs = requestSpecs.queryParam(pair.getKey(), pair.getValue());
			}
		}
	}

	// Get request body from json path and pass it in post operation
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param jsonFileName
	 * @param headers
	 * 
	 */
	@And("^I pass body as \"([^\"]*)\"$")
	public void setBody(String jsonFileName, Map<String, String> headers) throws Throwable {

		payload = ReusableMethods.ReadPayloadFromJsonFile(
				System.getProperty("user.dir") + "//src//test//resources//payloads//" + jsonFileName + ".json");
		Iterator<Entry<String, String>> it = headers.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, String> pair = it.next();
			if (pair.getValue().equalsIgnoreCase("null")) {
				String age = pair.getKey().replaceAll("\\d", "");

				payload = payload.replace("\"" + age + "\"" + ": " + "\"" + "%" + pair.getKey() + "\",", "");

			} else if (pair.getValue().equals("NA")) {
				// To delete actual value with comma and quote on both side
				payload = payload.replaceAll("\"" + "\\b" + pair.getKey() + "\\b" + "\"" + ": " + "\"" + "%" + "\\b"
						+ pair.getKey() + "\\b" + "\"" + ",", " ");

				// To delete actual value with quote on both side
				payload = payload.replaceAll("\"" + "\\b" + pair.getKey() + "\\b" + "\"" + ": " + "\"" + "%" + "\\b"
						+ pair.getKey() + "\\b" + "\"", " ");

				// To delete actual value with quote on one side
				payload = payload.replaceAll(
						"\"" + "\\b" + pair.getKey() + "\\b" + "\"" + ": " + "%" + "\\b" + pair.getKey() + "\\b" + ",",
						" ");

				// To delete actual value with quote on one side and without comma in end
				payload = payload.replaceAll(
						"\"" + "\\b" + pair.getKey() + "\\b" + "\"" + ": " + "%" + "\\b" + pair.getKey() + "\\b", " ");

				payload = payload.replaceAll(pair.getKey() + ": " + "%" + pair.getKey(), " ");
				String s = ",\r\n\t\t \r\n\t}";
				String x = ",\r\n\t \r\n}";
				payload = payload.replace(s, "}");
				payload = payload.replace(x, "}");

			}

			// To replace actual value
			else {
				payload = payload.replaceAll("%" + "\\b" + pair.getKey() + "\\b", pair.getValue());
			}

		}
		requestSpecs.body(payload);
	}

	// Trigger GET Endpoint
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param resourceName
	 */
	@And("^I perform GET operation \"([^\"]*)\"$")
	public void invokeGETOperation(String resourceName) {
		try {
			resourceURL = propResource.getProperty(resourceName);
			log.debug(resourceURL);
			res = requestSpecs.when().get(resourceURL);
			// CommonSteps.res.prettyPrint();

			if (generateLogs.equalsIgnoreCase("yes")) {
				log.info(requestWriter.toString());
				log.info("HTTPS Status: " + res.getStatusCode());
				log.info("Response: " + res.body().asString());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Trigger POST Endpoint
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param resourceName
	 * 
	 */
	@And("^I perform POST operation \"([^\"]*)\"$")
	public void invokePOSTOperation(String resourceName) throws Throwable {
		resourceURL = propResource.getProperty(resourceName);
		res = CommonSteps.requestSpecs.when().post(resourceURL);

		if (generateLogs.equalsIgnoreCase("yes")) {
			log.info(requestWriter.toString());
			log.info("HTTPS Status: " + res.getStatusCode());
			log.info("Response: " + res.body().asString());
		}

	}

	// Validates response type is in JSON format
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 */
	@And("^response content Type is json$")
	public void verifyResponseContentType() throws Throwable {
		res.then().assertThat().contentType(ContentType.JSON);
	}

	// Validates response body contains the given values
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param table
	 * 
	 */
	@And("^response Body contains$")
	public void verifyResponseBodyValues(DataTable table) throws Throwable {
		String expectedValue;
		List<String> list = table.asList(String.class);
		// System.out.println("data table value is "+list.get(0));
		Iterator<String> it = list.iterator();
		body = res.getBody();
		bodyStringValue = body.asString();

		// System.out.println("response body is " + bodyStringValue);
		while (it.hasNext()) {
			expectedValue = it.next();

			if (expectedValue != null) {
				if (!bodyStringValue.contains(expectedValue)) {

					if (generateLogs.equalsIgnoreCase("yes")) {
						log.info("Scenario Failed: " + expectedValue + " not found");
					}
					System.out.println("Scenario Failed: " + expectedValue + " not found");
				}
				Assert.assertTrue(bodyStringValue.contains(expectedValue));
			}

		}
	}

	// Validates the HTTP status code
	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param arg1
	 * 
	 */
	@Then("^I should get \"([^\"]*)\" response$")
	public void verifyHTTPStatusCode(String arg1) throws Throwable {
		if (res.getStatusCode() != Integer.parseInt(arg1)) {
			if (generateLogs.equalsIgnoreCase("yes")) {
				log.info("FAILED: Scenario Failed as expected HTTP status is :" + arg1);
			}
			System.out.println("FAILED: Expected HTTP status is :" + arg1 + " | Actual Status: " + res.getStatusCode());
		} else {
			System.out
					.println("Success: Expected HTTP status is :" + arg1 + " | Actual Status: " + res.getStatusCode());
		}
		res = res.then().assertThat().statusCode(Integer.parseInt(arg1)).extract().response();

	}

	/**
	 * 
	 * Created by: @author Nitin Tiwari
	 * 
	 * @param s
	 * 
	 */
	@After
	public static void afterEveryScenario(Scenario s) throws IOException {
		System.err.println(requestWriter.toString());
		System.err.println(responseWriter.toString());

	}

}

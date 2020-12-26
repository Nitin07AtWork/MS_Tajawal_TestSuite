package com.tajawal.utilities;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

public class ReusableMethods {

	public static JsonPath stringToJson(String res1) {
		JsonPath jsonPath = new JsonPath(res1);
		return jsonPath;
	}

	public static boolean isContain(String source, String subItem) {
		String pattern = "\\b" + subItem + "\\b";
		// System.out.println("pattern"+ pattern);
		Pattern p = Pattern.compile(pattern);
		Matcher m = p.matcher(source);
		return m.find();
	}

	// returns a JsonPath variable which can be used to traverse json response
	public static JsonPath rawToJson(Response r) {
		String res = r.asString();
		JsonPath jsonPath = new JsonPath(res);
		return jsonPath;
	}

	// to read payload from Json file
	public static String ReadPayloadFromJsonFile(String path) throws IOException {
		return new String(Files.readAllBytes(Paths.get(path)));
	}

}

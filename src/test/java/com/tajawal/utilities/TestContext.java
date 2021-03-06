package com.tajawal.utilities;

import java.util.HashMap;
import java.util.Map;

import cucumber.api.Scenario;

public class TestContext {
	private Map<String,Object> context;
	private Scenario scenario;

	public TestContext() {
		context = new HashMap<>();
	}

	public void setContext(String key, Object value) {
		context.put(key.toString(), value);
	}

	public Object getContext(String key) {
		return context.get(key.toString());
	}
	
	public Object getContext() {
		return context;
	}

	
	public Boolean isInContext(String key) {
		return context.containsKey(key.toString());
	}
	
	public Scenario getScenario() {
		return scenario;
	}
	
	public void setScenario(Scenario scenario) {
		this.scenario = scenario;
	}
}

package kg.iteam.service;

import kg.iteam.model.WeatherEntity;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class WeatherService {
    private final RestTemplate restTemplate;

    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public WeatherEntity getWeatherData(String city) {
        String apiUrl = "https://api.weatherapi.com/v1/current.json?key=ce822fbd27b54e0c8b394753240701&q=" + city;
        WeatherEntity weatherEntity = restTemplate.getForObject(apiUrl, WeatherEntity.class);
        return weatherEntity;
    }
}

package kg.iteam.controller;

import kg.iteam.model.*;
import kg.iteam.service.WeatherService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping
public class WeatherController {
    private final WeatherService weatherService;
    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public String index(Model model){
        model.addAttribute("city", new City());
        WeatherEntity weatherEntity = new WeatherEntity(new Location("City", "Region", "Country"), new Current(20, new Condition("Clear","//cdn.weatherapi.com/weather/64x64/night/113.png"), 0,0));
        model.addAttribute("weatherEntity", weatherEntity);
        return "index";
    }

    @PostMapping("/city")
    public String getCity(@ModelAttribute City city, Model model){
        WeatherEntity weatherEntity = weatherService.getWeatherData(city.getTown());
        System.out.println(weatherEntity);

        model.addAttribute("weatherEntity", weatherEntity);
        return "index";
    }
}
package kg.iteam.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Location(String name,
                       String region,
                       String country
) {
//    public String name(){
//        return name;
//    }
}

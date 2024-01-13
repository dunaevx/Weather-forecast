package kg.iteam.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Current(double temp_c,
                      Condition condition,

                      double humidity,
                      double cloud){}
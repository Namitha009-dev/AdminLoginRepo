package com.SkillsTracker;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

//This is class created to give access to Angular Localhost
@Component
public class RestConfig extends WebMvcConfigurerAdapter {
  @Override
      public void addCorsMappings(CorsRegistry registry) {
         registry.addMapping("/**").allowedMethods("*").allowedOrigins("*");
      }
      }
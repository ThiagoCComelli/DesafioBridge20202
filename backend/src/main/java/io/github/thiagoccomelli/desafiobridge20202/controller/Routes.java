package io.github.thiagoccomelli.desafiobridge20202.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.github.thiagoccomelli.desafiobridge20202.models.Factorial;

@RestController
@CrossOrigin(origins = "*")
public class Routes {

    @PostMapping("/factorial")
    public Factorial calcFactorial(@RequestBody Factorial factorial){
        factorial.calcFactorial();
        return factorial;
    }

}

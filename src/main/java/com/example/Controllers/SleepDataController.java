package com.example.Controllers;

import Dao.SleepData;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class SleepDataController {

    @GetMapping("/sleep")
    public SleepData getSleepData() {
        // Kreiraj ObjectMapper
        ObjectMapper objectMapper = new ObjectMapper();

        // Čitaj JSON podatke iz filea
        try {
            // Prvo definiraj putanju do filea u resources direktoriju
            File file = new File(Objects.requireNonNull(getClass().getClassLoader().getResource("data.json")).getFile());
            // Deserijaliziraj JSON u objekt SleepData
            return objectMapper.readValue(file, SleepData.class);
        } catch (IOException e) {
            e.printStackTrace();
            return null;//
        }
    }
}

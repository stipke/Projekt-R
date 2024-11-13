package Dao;

import java.util.List;

public class SleepData {
    private List<SleepEvent> sleepData;

    // Getters and setters
    public List<SleepEvent> getSleepData() {
        return sleepData;
    }

    public void setSleepData(List<SleepEvent> sleepData) {
        this.sleepData = sleepData;
    }
}

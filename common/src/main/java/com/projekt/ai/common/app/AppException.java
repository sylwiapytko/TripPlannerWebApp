package com.projekt.ai.common.app;

/**
 * Created by Lenovo on 2017-12-04.
 */
public class AppException extends RuntimeException {
    private String msg;

    public AppException(String msg) {
        super(msg);
        this.msg = msg;
    }
}

package purchase.service;


import hrhz.dto.CartDTO;
import hrhz.dto.PaymentDTO;

import java.util.List;
import java.util.Map;

public interface PurchaseService2 {

    List<PaymentDTO> getPaymentInfo(List<PaymentDTO> paymentDTOList);

    List<CartDTO> getCart(String id);
}